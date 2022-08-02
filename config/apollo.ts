import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "https://countries.trevorblades.com",
  }),
  cache: new InMemoryCache(),
});

export default client;
