// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const SENTRY_ENV = process.env.SENTRY_ENVTAG || process.env.NEXT_PUBLIC_SENTRY_ENVTAG || 'develop';

Sentry.init({
  dsn: SENTRY_DSN || 'https://e61e7fa34f294b5da6779e1b34adf7bf@o987508.ingest.sentry.io/5973234',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.1,
  environment: SENTRY_ENV,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
