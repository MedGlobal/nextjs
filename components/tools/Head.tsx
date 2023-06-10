import React from 'react'
import Head from 'next/head'
import { withRouter, NextRouter } from 'next/router'

import { DOMAIN, SSL_ON } from '@/data/constants/api'

type HeadTemplateProps = {
  router: NextRouter,
  title: string,
  titleSuffix?: string,
  description?: string,
  // keywords?: string[],
  image?: string,
  url?: string,
  type?: string,
  locales?: string[],
  localesRegions?: string[],
  schema?: {
    '@context': string,
    '@type': string,
    [key: string]: unknown,
  },
  children?: React.ReactNode,
}

const HeadTemplate:React.FC<HeadTemplateProps> = ({
  router,
  title = 'INSIGHTS',
  titleSuffix = '| INSIGHTS',
  description = 'Welcome to MedGlobal\'s INSIGHTS Buyer\'s Guide',
  image = `${SSL_ON ? 'https' : 'http'}://${DOMAIN}/opengraph.jpg`,
  url = `${SSL_ON ? 'https' : 'http'}://${DOMAIN}${router.asPath}`,
  type = 'website',
  locales = [
    'en',
    'es',
    'de',
    'fr',
    'pt',
    'zh',
  ],
  localesRegions = [
    'en_US',
    'es_MX',
    'de_DE',
    'fr_FR',
    'pt_BR',
    'zh_CN',
  ],
  schema = undefined,
  children,
  // keywords = [],
}) => {
  const { locale = 'en' } = router
  const metaLocales = locales
    .filter((l) => l !== locale)
    .map((l) => (
      <link
        key={l}
        rel='alternate'
        hrefLang={l}
        href={`${SSL_ON ? 'https' : 'http'}://${DOMAIN}/${l}${router.asPath}`}
      />))
  const ogCurrent = localesRegions
    .find((l) => l.startsWith(locale)) ?? 'en_US'
  const ogLocales = localesRegions
    .filter((l) => !l.startsWith(locale))
    .map((l) => (
      <meta key={l} property='og:locale:alternate' content={l} />))
  const titleStr = `${title} ${titleSuffix}`
  return (
    <Head>
      <title>{titleStr}</title>
      <meta name='description' content={description} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:image' content={image} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:type' content={type} />
      <meta property='og:url' content={url} />
      <link rel="canonical" href={url} />
      {metaLocales}

      <meta property='og:locale' content={ogCurrent} />
      {ogLocales}

      { schema
        ? (<script type="application/ld+json">{JSON.stringify(schema)}</script>)
        : null
      }

      {children}
    </Head>
  )
}

export default withRouter(HeadTemplate)
