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
  data: Contact[];
}

const ContactList = ({showProfile, data}: ContactListProps) => {
  const [current, setCurrent] = useState(1);

  const directTo = (data: number) => {
    setCurrent(data);
  }

  return (
    <div className={contactList}>
      {
        data.map((contact: Contact, index: number) => (
          ((current - 1) * 10 <= index && current * 10 > index ) &&
            <div key={contact.id.toString()}>
              <ContactCard contactInfo={contact} showProfile={showProfile} />
            </div>
        ))
      }
      {
        (data.length !== 0) &&
          <Pagination 
            current={current}
            maxPages={Math.ceil(data.length/10)}
            directTo={directTo}
          />
      }
    </div>
  )
}

export default ContactList;