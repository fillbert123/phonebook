import React from 'react';
import {useQuery} from '@apollo/client'
import {GET_CONTACT_LIST} from '../graphql/queries'
import ContactCard from './ContactCard';
import {loadingScreen} from "../styles/style"

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

const ContactList: React.FC = () => {
  const {loading, data} = useQuery(GET_CONTACT_LIST);

  return (
    <>
      {
        // !loading && data.contact.map((contact: Contact) => (
        //   <div key={contact.id.toString()}>
        //     <ContactCard contactInfo={contact}/>
        //   </div>
        // ))
        loading
        ? <div className={loadingScreen}>Loading...</div>
        : data.contact.map((contact: Contact) => (
            <div key={contact.id.toString()}>
              <ContactCard contactInfo={contact}/>
            </div>
          ))
      }
    </>
  )
}

export default ContactList;