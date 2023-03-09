import * as React from 'react'
import { ApolloQueryResult } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import getClient from '@/config/apollo'
import { LIST_STORES } from '@/graphql/queries/stores'

const Home: NextPage = ({ stores }) => {
  console.log("🚀 ~ file: index.tsx:17 ~stores:", stores)
  const { t } = useTranslation(['common'])
  return (
    <Container maxWidth='lg'>
      <Head>
        <title>Next App Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' color='primary'>
          Boilerplate for building faster. Only SSR.
        </Typography>
        <Typography component='h2' color='secondary'>
          Material UI v5 with Next.js in TypeScript
        </Typography>
        <Typography component='h2' color='secondary'>
          Sentry/Next for error handling
        </Typography>
        <Typography component='h2' color='secondary'>
          Apollo Client for data fetching
        </Typography>
        <Typography component='h2' color='secondary'>
          {t('common:hello')}
        </Typography>

        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </Box>
    </Container>
  )
}

type CountriesListModel = {
  countries: {
    code: string,
    name: string,
    emoji: string,
  }[],
}

export async function getServerSideProps({ locale }: { locale: string }) {
  const apolloClient = getClient({ language: locale as LanguageCode })
  const countriesQuery: Promise<ApolloQueryResult<GraphQLDataList<CountriesListModel>>> =
    apolloClient.query({
      query: LIST_STORES,
    })
  const results = await Promise.all([countriesQuery])

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
      initialApolloState: apolloClient.cache.extract(),
      stores: results[0].data.listStores.objects.slice(0, 4),
    },
  }
}

export default Home
