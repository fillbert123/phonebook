import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import ContactList from './components/ContactList';

const client = new ApolloClient ({
  cache: new InMemoryCache,
  uri: 'https://wpe-hiring.tokopedia.net/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <ContactList />
    </ApolloProvider>
  );
}

export default App;
