import * as React from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { SnackbarProvider, SnackbarKey } from 'notistack'

import { GA_TRACKING_IDS, GA_TRACKING_GROUP, LO_ID, FBP_ID } from '@/data/constants/analytics'
import theme from '@/config/theme'
import createEmotionCache from '@/config/emotion'
import GoogleAnalyticsScript from '@/components/scripts/GoogleAnalytics'
import LuckyOrangeScript from '@/components/scripts/LuckyOrange'
import FacebookPixelScript from '@/components/scripts/FacebookPixel'
import useApollo from '@/hooks/Apollo/useApollo'
import usePageTracking from '@/hooks/GoogleAnalytics/usePageTracking'
import '@/utils/typy/customTypes'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface BoilerplateAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const BoilerplateApp = (props: BoilerplateAppProps) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
  } = props

  usePageTracking()
  const notistackRef = React.createRef<SnackbarProvider>()
  const onClickDismiss = (key: SnackbarKey) => () => {
    if (notistackRef.current) notistackRef.current.closeSnackbar(key)
  }
  const apolloClient = useApollo(pageProps?.initialApolloState)

  const GAnalyticsScripts = React.useMemo(() => GA_TRACKING_IDS.map((id) => (
    <GoogleAnalyticsScript key={id} id={id} group={GA_TRACKING_GROUP}/>
  )), [])
  const LuckyOScript = React.useMemo(() => (
    LO_ID ? <LuckyOrangeScript key={LO_ID} id={LO_ID} /> : null
  ), [])
  const FBPixelScript = React.useMemo(() => (
    FBP_ID ? <FacebookPixelScript key={FBP_ID} id={FBP_ID} /> : null
  ), [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {GAnalyticsScripts}
      {LuckyOScript}
      {FBPixelScript}

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(BoilerplateApp)
