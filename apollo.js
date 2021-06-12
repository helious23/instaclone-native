import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://pharmstagram-backend.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
