export const GQL_ENDPOINT: string = process.env.REACT_APP_GQL_ENDPOINT
|| 'https://beta-api.medglobalgroup.com/gql/';
export const SERVER_VALIDATION_ENDPOINT: string = process.env.REACT_APP_SERVER_VALIDATION_ENDPOINT
|| 'https://beta-api.medglobalgroup.com/register/';

export const CSRF_TOKEN: string = 'csrftoken';
export const CONNECT_TOKEN: string = 'connected_token';
export const REFRESH_TOKEN: string = 'refresh_token';
export const REBOOT_TOKEN: string = 'reboot_token';

export const CSRF_HEADER: string = 'X-CSRFToken';

export const CLIENT_VERSION: string = process.env.REACT_APP_CLIENT_VERSION || '1.0.0';