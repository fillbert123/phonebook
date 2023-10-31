import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import ContactList from './components/ContactList';
import {mainComponent} from "./styles/style"

const client = new ApolloClient ({
  cache: new InMemoryCache,
  uri: 'https://wpe-hiring.tokopedia.net/graphql'
})

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className={mainComponent}>
        <ContactList />
      </div>
    </ApolloProvider>
  );
}

export default App;
