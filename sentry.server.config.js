// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { excludeGraphQLFetch } from 'apollo-link-sentry';
import * as Sentry from '@sentry/nextjs';
import { Dedupe as DedupeIntegration } from '@sentry/integrations';
import { SENTRY_DSN, SENTRY_ENV } from '@/data/constants/sentry';
import { CLIENT_VERSION } from '@/data/constants/api';


Sentry.init({
  dsn: SENTRY_DSN || 'https://e61e7fa34f294b5da6779e1b34adf7bf@o987508.ingest.sentry.io/5973234',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.1,
  environment: SENTRY_ENV,
  release: CLIENT_VERSION,
  autoSessionTracking: true,
  beforeBreadcrumb: excludeGraphQLFetch,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  integrations: [
    new DedupeIntegration(),
  ],
});
