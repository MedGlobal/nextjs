export const SENTRY_DSN: string = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || ''
export const SENTRY_ENV: string = process.env.SENTRY_ENVTAG || process.env.NEXT_PUBLIC_SENTRY_ENVTAG || 'develop'
