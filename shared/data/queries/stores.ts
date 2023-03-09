import gql from 'graphql-tag'

export const LIST_STORES = gql`
  query listStores {
    listStores {
      pageInfo {
        hasNext
        hasPrev
        page
        pageSize
        __typename
      }
      objects {
        id
        title
        slug
        summary
      }
      __typename
    }
  }
`
