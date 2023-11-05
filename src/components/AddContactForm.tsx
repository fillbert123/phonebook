import React, { useEffect, useState } from "react";
import { addContactForm, userInput, actionButton, modalBottom } from "../styles/style";
import { useMutation } from "@apollo/client";
import { ACC_CONTACT_WITH_PHONES } from '../graphql/mutations'

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

interface AddContactFormProps {
  hideForm: () => void;
  toggleTicker: (type: string, message: string) => void;
  data: Contact[];
}

const AddContactForm = ({hideForm, toggleTicker, data}: AddContactFormProps) => {
  const [addContact] = useMutation(ACC_CONTACT_WITH_PHONES);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState([{ number: ''}]);
  const [errorMessage, setErrorMessage] = useState('');
  const numericalValidation = /^[0-9]+$/
  const alphabeticalValidation = /^[a-zA-Z]+$/

  useEffect (() => {
    setErrorMessage('');

    if (firstName.length === 0) {
      setErrorMessage('First name should be filled');
    }
    else if (!alphabeticalValidation.test(firstName)) {
      setErrorMessage('First name should not contain number');
    }
    else if (lastName.length === 0) {
      setErrorMessage('Last name should be filled');
    }
    else if (!alphabeticalValidation.test(lastName)) {
      setErrorMessage('Last name should not contain number');
    }
    else {
      let index = phoneNumber.length - 1;
      do {
        if (phoneNumber[index].number.length === 0) {
          setErrorMessage(`Phone number ${index + 1} should be filled`);
        }
        else if (!numericalValidation.test(phoneNumber[index].number)) {
          setErrorMessage(`Phone number ${index + 1} should not contain letter`);
        }
        else if (phoneNumber[index].number.length > 13 || phoneNumber[index].number.length < 9) {
          setErrorMessage(`Phone number ${index + 1} length is invalid (9-13)`);
        }
        index--;
      } while (index >= 0);  
    }
  }, [firstName, lastName, phoneNumber])

  const handleHideForm = () => {
    hideForm();
  }

  const checkExistingDuplicate = () => {
    let flag = false;
    data.map((contact) => {
      if(contact.first_name === firstName && contact.last_name === lastName) {
        flag = true;
      }
    })
    return (flag);
  }

  const handleAddContact = async () => {
    if (errorMessage.length === 0) {
      const existingDuplicate = checkExistingDuplicate();
      if (existingDuplicate) {
        toggleTicker("error", `${firstName} ${lastName} has been taken`);
      }
      else {
        try {
          const {} = await addContact({
            variables: {
              first_name: firstName,
              last_name: lastName,
              phones: phoneNumber
            }
          })
          toggleTicker("success", `${firstName} ${lastName} was successfully added`);
          handleHideForm();
        }
        catch (error) {
          toggleTicker("error", "Something went wrong");
        }
      }
    }
    else {
      toggleTicker("error", errorMessage);
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