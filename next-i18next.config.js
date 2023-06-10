/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HttpBackend = require('i18next-http-backend/cjs')
const ChainedBackend = require('i18next-chained-backend').default
const LocalStorageBackend = require('i18next-localstorage-backend').default
/* eslint-enable */

const isBrowser = typeof window !== 'undefined'

module.exports = {
  backend: {
    backendOptions: [{ expirationTime: 60 * 60 * 1000 }, {}], // 1 hour
    backends: isBrowser ? [LocalStorageBackend, HttpBackend] : [],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de', 'pt', 'zh'],
    localePath: path.resolve('./public/locales'),
  },
  serializeConfig: false,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  use: isBrowser ? [ChainedBackend] : [],
}
