const SERVER: string = process.env.NEXT_PUBLIC_SERVER || 'test.foxm.xyz'
const PROTOCOL = SERVER.startsWith('localhost')
  ? 'http'
  : 'https'
export const DOMAIN: string = process.env.NEXT_PUBLIC_DOMAIN
  || 'test.foxm.xyz'
export const SSL_ON: boolean = process.env.NEXT_PUBLIC_SSL_ON === 'true'
  || false
export const GQL_ENDPOINT = `${PROTOCOL}://${SERVER}/gql/`
export const GQL_BATCH_ENDPOINT = `${PROTOCOL}://${SERVER}/gql-batch-next/`
export const SERVER_VALIDATION_ENDPOINT = `${PROTOCOL}://${SERVER}/register/`

export const CSRF_TOKEN = 'csrftoken'
export const CONNECT_TOKEN = 'connected_token'
export const REFRESH_TOKEN = 'refresh_token'
export const REBOOT_TOKEN = 'reboot_token'

export const CSRF_HEADER = 'X-CSRFToken'

export const CLIENT_VERSION: string = process.env.REACT_APP_CLIENT_VERSION || '1.0.0'
