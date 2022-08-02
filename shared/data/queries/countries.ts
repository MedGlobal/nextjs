import gql from 'graphql-tag'

export const COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`