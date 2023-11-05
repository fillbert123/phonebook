import React from "react";
import ContactList from "./ContactList";
import { heading } from "../styles/style";
import { useQuery } from "@apollo/client";
import { GET_CONTACT_LIST } from "../graphql/queries";
import EmptyState from "./EmptyState";

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

interface ContactGroupProps {
  showProfile: (data: number) => void;
  data: Contact[];
  loading: boolean;
}

const ContactGroup = ({showProfile, data, loading}: ContactGroupProps) => {
  // const {loading, data, refetch} = useQuery(GET_CONTACT_LIST);
  const favoriteList = localStorage.getItem('favorites');
  const favoriteArray = (favoriteList == undefined) ? [] : favoriteList.split('#'); 
  const favoriteObject: Contact[] = [];
  const contactObject: Contact[] = [];

  !loading &&
    data.map((contact: Contact, index: number) => {
      (favoriteArray.indexOf(contact.id.toString()) === -1)
        ? contactObject.push(data[index])
        : favoriteObject.push(data[index])
    })

  return (
    <>
      <div className={heading}>Favorites</div>
      {
        (favoriteObject.length === 0)
          ? <EmptyState />
          : <ContactList data={favoriteObject} showProfile={showProfile} />
      }
      <div className={heading}>Contacts</div>
      {
        (contactObject.length === 0)
        ? <EmptyState />
        : <ContactList data={contactObject} showProfile={showProfile}/>
      }
    </>
  )
}

export default ContactGroup;