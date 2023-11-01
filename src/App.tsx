import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import ContactList from './components/ContactList';
import {mainComponent, heading} from "./styles/style"
import SearchBar from './components/SearchBar';

const client = new ApolloClient ({
  cache: new InMemoryCache,
  uri: 'https://wpe-hiring.tokopedia.net/graphql'
})

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className={mainComponent}>
      <SearchBar />
      <div className={heading}>Favorites</div>
      {/* <ContactList /> */}
      <div className={heading}>Contacts</div>
      <ContactList />
      </div>
    </ApolloProvider>
  );
}

export default App;
