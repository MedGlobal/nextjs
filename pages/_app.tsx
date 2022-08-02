import * as React from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client"
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { GA_TRACKING_IDS, GA_TRACKING_GROUP } from '@/data/constants/analytics'
import theme from '@/config/theme'
import client from "@/config/apollo"
import createEmotionCache from '@/config/emotion'
import GoogleAnalyticsScript from '@/components/scripts/GoogleAnalytics'
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
    pageProps
  } = props

  usePageTracking()

  const GAnalyticsScripts = React.useMemo(() => GA_TRACKING_IDS.map((id) => (
    <GoogleAnalyticsScript key={id} id={id} group={GA_TRACKING_GROUP}/>
  )), [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {GAnalyticsScripts}

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(BoilerplateApp)
