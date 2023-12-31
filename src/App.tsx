import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
// import {searchSection, listSection, addContact, modalBackground} from "./styles/style"
// import SearchBar from './components/SearchBar';
// import addContactPlus from "./assets/person.crop.circle.fill.badge.plus.svg"
// import AddContactForm from './components/AddContactForm';
// import ProfileCard from './components/ProfileCard';
// import Ticker from './components/Ticker';
// import ContactGroup from './components/ContactGroup';
import Main from './components/Main';

const client = new ApolloClient ({
  cache: new InMemoryCache,
  uri: 'https://wpe-hiring.tokopedia.net/graphql'
})

const App: React.FC = () => {
  // const [showForm, setShowForm] = useState(false);
  // const [profile, setProfile] = useState(0);

  // const toggleForm = () => {
  //   setProfile(0);
  //   setShowForm(!showForm);
  // }

  // const showProfile = (data: number) => {
  //   setShowForm(false);
  //   setProfile(data);
  // }

  // const hideProfile = () => {
  //   setProfile(0);
  // }

  return (
    <ApolloProvider client={client}>
      <Main />
      {/* <div>
        <div className={searchSection}>
          <SearchBar showProfile={showProfile} />
        </div>
        <div className={listSection}>
          <ContactGroup showProfile={showProfile}/>
        </div>
        <div className={addContact} onClick={toggleForm}>
          <img src={addContactPlus} alt="" />
        </div>
        <div>
          {
            showForm && <AddContactForm hideForm={toggleForm}/>
          }
          {
            profile !== 0 && <ProfileCard closeProfile={hideProfile} profile={profile} />
          }
          {
            (showForm || profile !== 0) && <div className={modalBackground}></div>
          }
          <Ticker type="error" />
        </div>
      </div> */}
    </ApolloProvider>
  );
}

export default App;
