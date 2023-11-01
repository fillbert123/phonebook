import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import ContactList from './components/ContactList';
import {heading, searchSection, listSection, addContact} from "./styles/style"
import SearchBar from './components/SearchBar';
import addContactPlus from "./assets/person.crop.circle.fill.badge.plus.svg"
import AddContactForm from './components/AddContactForm';

const client = new ApolloClient ({
  cache: new InMemoryCache,
  uri: 'https://wpe-hiring.tokopedia.net/graphql'
})

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  return (
    <ApolloProvider client={client}>
      <div>
        <div className={searchSection}>
          <SearchBar />
        </div>
        <div className={listSection}>
          <div className={heading}>Favorites</div>
          {/* <ContactList /> */}
          <div className={heading}>Contacts</div>
          <ContactList />
        </div>
        <div className={addContact} onClick={toggleForm}>
          <img src={addContactPlus} alt="" />
        </div>
        <div>
          {
            showForm && <AddContactForm hideForm={toggleForm}/>
          }
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
