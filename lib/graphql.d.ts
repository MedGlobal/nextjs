interface GQLObject {
  __typename: string,
}

interface GraphQLSQL extends GQLObject {
  __typename: "DjangoDebugSQL",
  sql: string,
  transId: string | null,
  transStatus: string | null,
  isoLevel: string | null,
  encoding: string | null,
}

interface GraphQLDebug extends GQLObject {
  __typename: "DjangoDebug",
  sql: GraphQLSQL,
}

interface GraphQLPageInfo extends GQLObject {
  __typename: "PaginationDataType",
  page: number,
  pageSize: number,
  totalPages: number,
  totalObjects: number,
  hasNext: boolean,
  hasPrev: boolean,
}

interface GraphQLDataList<Type> extends GQLObject {
  // __typename: string,
  pageInfo: GraphQLPageInfo,
  objects: Type[],
}
