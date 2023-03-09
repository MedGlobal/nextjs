export const SENTRY_DSN: string = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || ''
export const SENTRY_ENV: string = process.env.SENTRY_ENVTAG || process.env.NEXT_PUBLIC_SENTRY_ENVTAG || 'develop'

const NO_AUTH = 'not_authenticated'

// Inbound Filters from sentry might not work, so lets ignore them from here,
// we just need the name of the operation
export const SENTRY_IGNORE_OPERATIONS: string[] = [
  NO_AUTH,
]
