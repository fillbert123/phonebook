import React from "react";
import ContactList from "./ContactList";
import { heading } from "../styles/style";
import { useQuery } from "@apollo/client";
import { GET_CONTACT_LIST } from "../graphql/queries";

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
}

const ContactGroup = ({showProfile}: ContactGroupProps) => {
  const {loading, data, refetch} = useQuery(GET_CONTACT_LIST);
  const favoriteList = localStorage.getItem('favorites');
  const favoriteArray = (favoriteList == undefined) ? [] : favoriteList.split('#'); 
  const favoriteObject: Contact[] = [];
  const contactObject: Contact[] = [];

  !loading &&
    data.contact.map((contact: Contact, index: number) => {
      (favoriteArray.indexOf(contact.id.toString()) === -1)
        ? contactObject.push(data.contact[index])
        : favoriteObject.push(data.contact[index])
    })

  return (
    <>
      <div className={heading}>Favorites</div>
      <ContactList data={favoriteObject} showProfile={showProfile} />
      <div className={heading}>Contacts</div>
      <ContactList data={contactObject} showProfile={showProfile}/>
    </>
  )
}

export default ContactGroup;