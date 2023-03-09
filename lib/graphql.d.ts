interface GQLObject {
  __typename: string,
}

interface GraphQLDebug extends GQLObject {
  __typename: 'DjangoDebug',
  sql: {
    __typename: 'DjangoDebugSQL',
    sql: string,
    transId: string | null,
    transStatus: string | null,
    isoLevel: string | null,
    encoding: string | null,
  },
}

interface GraphQLPageInfo extends GQLObject {
  __typename: 'PaginationDataType',
  page: number,
  pageSize: number,
  totalPages: number,
  totalObjects: number,
  hasNext: boolean,
  hasPrev: boolean,
}

interface GraphQLResult<T> extends GQLObject {
  [operation: string]: T,
  // !FIXME: I don't remember if the errors are build this way
  errors: {
    message: string,
  }[]
}

interface GraphQLDataList<T> extends GQLObject {
  [operation: string]: {
    pageInfo: GraphQLPageInfo,
    objects: T[],
  }
}
