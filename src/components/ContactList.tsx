import React, { useState } from 'react';
import {useQuery} from '@apollo/client'
import {GET_CONTACT_LIST} from '../graphql/queries'
import ContactCard from './ContactCard';
import LoadingScreen from './LoadingScreen';
import Pagination from './Pagination';
import { contactList } from '../styles/style';

interface Contact {
  id: number,
  first_name: string,
  last_name: string,
  created_at: string,
  phones: Phone[]
}

interface Phone {
  number: number;
}

interface ContactListProps {
  showProfile: (data: number) => void;
  type: string;
}

const ContactList = ({showProfile, type}: ContactListProps) => {
  const {loading, data} = useQuery(GET_CONTACT_LIST);
  const favoriteList = localStorage.getItem('favorites');
  const favoriteArray = (favoriteList == undefined) ? [] : favoriteList.split('#'); 
  const [current, setCurrent] = useState(1);

  const favoriteObject: Contact[] = [];
  const contactObject: Contact[] = [];

  const directTo = (data: number) => {
    setCurrent(data);
  }

  !loading &&
    data.contact.map((contact: Contact, index: number) => {
      (favoriteArray.indexOf(contact.id.toString()) === -1)
        ? contactObject.push(data.contact[index])
        : favoriteObject.push(data.contact[index])
    })

  return (
    <div className={contactList}>
      {
        loading
        ? <LoadingScreen />
        : (type === "contact")
          ? contactObject.map((contact: Contact, index: number) => (
              ((current - 1) * 10 <= index && current * 10 > index ) &&
                <div key={contact.id.toString()}>
                  <ContactCard contactInfo={contact} showProfile={showProfile} />
                </div>
            ))
          : favoriteObject.map((contact: Contact, index: number) => (
              ((current - 1) * 10 <= index && current * 10 > index ) &&
                <div key={contact.id.toString()}>
                  <ContactCard contactInfo={contact} showProfile={showProfile} />
                </div>
            ))
      }
      {
        (type === "contact")
        ? (contactObject.length !== 0) &&
            <Pagination 
              current={current}
              maxPages={Math.ceil(contactObject.length/10)}
              directTo={directTo}
            />
        : (favoriteObject.length !== 0) &&
            <Pagination 
              current={current}
              maxPages={Math.ceil(favoriteObject.length/10)}
              directTo={directTo}
            />
      }
    </div>
  )
}

export default ContactList;