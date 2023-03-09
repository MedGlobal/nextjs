export const ENV_DEVELOPMENT = 'development'
export const ENV_STAGING = 'staging'
export const ENV_PRODUCTION = 'production'

type ENVIRONMENT_TYPE =
  | typeof ENV_DEVELOPMENT
  | typeof ENV_STAGING
  | typeof ENV_PRODUCTION

const ENVIRONMENTS: ENVIRONMENT_TYPE[] = [
  ENV_DEVELOPMENT,
  ENV_STAGING,
  ENV_PRODUCTION,
]

const NEXT_PUBLIC_ENV = (process.env.NEXT_PUBLIC_ENV_LEVEL as ENVIRONMENT_TYPE) || ENV_DEVELOPMENT

export const ENVIRONMENT: ENVIRONMENT_TYPE | string =
  NEXT_PUBLIC_ENV && ENVIRONMENTS.includes(NEXT_PUBLIC_ENV)
    ? NEXT_PUBLIC_ENV
    : ENV_DEVELOPMENT
