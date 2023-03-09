/** @type {import('next').NextConfig} */
// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

/* eslint-disable @typescript-eslint/no-var-requires */
const { withSentryConfig } = require('@sentry/nextjs')
const { i18n } = require('./next-i18next.config')
/* eslint-enable */

const nextConfig = {
  // Your existing module.exports
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  sentry: {
    hideSourceMaps: process.env.NODE_ENV === 'development',
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: false,
    largePageDataBytes: 145 * 100000,
    scrollRestoration: true,
  },
  // !! WARN !! If your backend produces its own sitemap, make sure to rewrite the destination
  // async rewrites() {
  //   return [
  //     {
  //       source: '/sitemap.xml',
  //       destination: 'https://example.com/sitemap.xml',
  //     },
  //     {
  //       source: '/sitemap/:slug',
  //       destination: 'https://example.com/sitemap/:slug',
  //     },
  //   ]
  // },
  // !! WARN !!
}

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
