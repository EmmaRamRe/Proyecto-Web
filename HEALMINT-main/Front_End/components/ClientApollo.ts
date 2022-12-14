import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const Client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/',
  cache: new InMemoryCache()
});

export default Client;