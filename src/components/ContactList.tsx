import React from 'react';
import {useQuery} from '@apollo/client'
import {GET_CONTACT_LIST} from '../graphql/queries'
import ContactCard from './ContactCard';
import LoadingScreen from './LoadingScreen';

interface Contact {
  id: number,
  first_name: string,
  last_name: string,
  created_at: string,
  phones: Phone[]
}

interface Phone {
  number: number
}

interface ContactListProps {
  showProfile: (data: number) => void;
  type: string
}

const ContactList = ({showProfile, type}: ContactListProps) => {
  const {loading, data} = useQuery(GET_CONTACT_LIST);

  const favoriteList = localStorage.getItem('favorites');
  const favoriteArray = (favoriteList == undefined) ? [] : favoriteList.split('#'); 

  return (
    <>
      {
        loading
        ? <LoadingScreen />
        : (type === "contact")
          ? data.contact.map((contact: Contact) => (
            (favoriteArray.indexOf(contact.id.toString()) === -1) &&
              <div key={contact.id.toString()}>
                <ContactCard contactInfo={contact} showProfile={showProfile} />
              </div>
          ))
          : data.contact.map((contact: Contact) => (
            (favoriteArray.indexOf(contact.id.toString()) !== -1) &&
              <div key={contact.id.toString()}>
                <ContactCard contactInfo={contact} showProfile={showProfile} />
              </div>
          ))
      }
    </>
  )
}

export default ContactList;