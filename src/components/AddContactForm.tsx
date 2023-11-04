import React, { useState } from "react";
import { addContactForm, userInput, actionButton, modalBottom } from "../styles/style";
import { useMutation } from "@apollo/client";
import {ACC_CONTACT_WITH_PHONES} from '../graphql/mutations'

interface AddContactFormProps {
  hideForm: () => void;
}

const AddContactForm = ({hideForm}: AddContactFormProps) => {
  const [addContact] = useMutation(ACC_CONTACT_WITH_PHONES);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState([{ number: ''}]);

  const handleHideForm = () => {
    hideForm();
  }

  const handleAddContact = async () => {
    try {
      const {} = await addContact({
        variables: {
          first_name: firstName,
          last_name: lastName,
          phones: phoneNumber
        }
      })
      handleHideForm();
      //show ticker
    }
    catch (error) {
      console.log(error);
      //show ticker
    }
  }

  const handleAddField = () => {
    setPhoneNumber(phoneNumber.concat({ number: ''}));
  }

  return (
    <div className={[addContactForm, modalBottom].join(' ')}>
      <div>Add contact</div>
      <input 
        type="text" 
        className={userInput} 
        value={firstName}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
        placeholder="First name"
      />
      <input 
        type="text" 
        className={userInput} 
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        placeholder="Last name"
      />
      <div>
        {
          phoneNumber.map((phone, index) => (
            <input 
              key={index}
              type="text" 
              className={userInput} 
              value={phone.number}
              onChange={(event) => {
                const newPhoneNumber = [...phoneNumber];
                newPhoneNumber[index].number = event.target.value;
                setPhoneNumber(newPhoneNumber);
              }}
              placeholder={`Phone number ${index + 1}`}
            />
          ))
        }
        <div className={actionButton} onClick={handleAddField}>Add more phone number</div>
      </div>
      <div>
        <div className={actionButton} onClick={handleAddContact}>Add</div>
        <div className={actionButton} onClick={handleHideForm}>Cancel</div>
      </div>
    </div>
  )
}

export default AddContactForm;