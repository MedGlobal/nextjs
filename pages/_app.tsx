import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { GA_TRACKING_IDS, GA_TRACKING_GROUP } from '@/constants/analytics'
import theme from '@/config/theme';
import createEmotionCache from '@/config/emotion';
import GoogleAnalyticsScript from 'components/scripts/GoogleAnalytics';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps
  } = props;

  const GAnalytics = React.useMemo(() => GA_TRACKING_IDS.map((id) => (
    <GoogleAnalyticsScript id={id} group={GA_TRACKING_GROUP}/>
  )), []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      {GAnalytics}

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MyApp)
