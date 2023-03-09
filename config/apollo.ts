import {
  ApolloClient,
  from,
  InMemoryCache,
} from '@apollo/client'
import { createHttpLink } from '@apollo/client/link/http'
import { BatchHttpLink } from '@apollo/client/link/batch-http'
import { setContext } from '@apollo/client/link/context'
import { SentryLink } from 'apollo-link-sentry'
import { SENTRY_IGNORE_OPERATIONS } from '@/data/constants/sentry'
import { ENVIRONMENT, ENV_PRODUCTION } from '@/data/constants/environments'
import {
  GQL_ENDPOINT,
  GQL_BATCH_ENDPOINT,
  CLIENT_VERSION,
} from '@/data/constants/api'

export type CacheState = {
  [key: string]: unknown,
};

const errorSentryLink = new SentryLink({
  setTransaction: true,
  setFingerprint: true,
  shouldHandleOperation: (({ operationName }) => !SENTRY_IGNORE_OPERATIONS.includes(operationName)),
  attachBreadcrumbs: {
    includeQuery: true,
    includeVariables: true,
    includeError: true,
    // transform: ((breadcrumb, operation) => {
    //   return breadcrumb;
    // }),
  },
})

let apolloClient: ApolloClient<unknown> | null = null
let oldState: CacheState | void = undefined // eslint-disable-line no-undef-init
let prevLang: string | null = null
let prevBatch: boolean | null = null

interface CreateApolloProps {
  language: LanguageCode,
  batch: boolean,
}

const __createApollo = ({
  language,
  batch,
  // t = null,
  // enqueueSnackbar = null,
}: CreateApolloProps) => {
  const selectedUrl = batch
    ? GQL_BATCH_ENDPOINT
    : GQL_ENDPOINT
  const linkOpts = {
    uri: selectedUrl,
    credentials: 'include',
  }
  const httpLink = batch
    ? new BatchHttpLink(linkOpts)
    : createHttpLink(linkOpts)

  const extraHeadersLink = setContext((_, { headers }) => ({
    credentials: 'include',
    headers: {
      ...headers,
      Accept: 'application/json',
      'Accept-Language': language,
      'Client-Version': CLIENT_VERSION,
      'Content-Type': 'application/json',
    },
  }))

  return new ApolloClient({
    name: selectedUrl,
    version: CLIENT_VERSION,
    ssrMode: typeof window === 'undefined',
    connectToDevTools: ENVIRONMENT !== ENV_PRODUCTION,
    queryDeduplication: true,
    link: from([
      extraHeadersLink,
      errorSentryLink,
      // gqlErrorLink,
      httpLink,
    ]),
    cache: new InMemoryCache(),

    // @ts-ignore
    onError: ({ networkError, graphQLErrors }) => {
      if (graphQLErrors) console.error('⚛️ GraphQl Error ⚛️', graphQLErrors)
      if (networkError) console.error('👮🏻‍♀️ network error', networkError)
    },
  })
}

const __updateCache = ({
  initialState,
  client,
}: { initialState?: CacheState, client: ApolloClient<unknown> }) => {
  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = client.extract() as CacheState

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    client.cache.restore({ ...existingCache, ...initialState })
    oldState = initialState
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return client

  return client
}

type ApolloClientProps = {
  language?: LanguageCode,
  initialState?: CacheState,
}

export const getClient = ({
  language = 'en',
  initialState,
}: ApolloClientProps): ApolloClient<unknown> => {
  const batch = typeof window === 'undefined'
  if (
    apolloClient
    && batch === prevBatch
    && language === prevLang
    && oldState === initialState
  ) return apolloClient
  if (language) prevLang = language
  if (batch) prevBatch = batch

  const client = __createApollo({ language, batch })
  apolloClient = __updateCache({ initialState, client })
  return apolloClient
}

export default getClient
