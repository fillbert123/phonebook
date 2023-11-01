import React from "react";
import { addContactForm, userInput, actionButton, modalBottom } from "../styles/style";

interface AddContactFormProps {
  hideForm: () => void;
}

const AddContactForm = ({hideForm}: AddContactFormProps) => {
  const handleHideForm = () => {
    hideForm();
  }

  return (
    <div className={[addContactForm, modalBottom].join(' ')}>
      <div>Add contact</div>
      <input type="text" className={userInput} placeholder="First name"/>
      <input type="text" className={userInput} placeholder="Last name"/>
      <input type="text" className={userInput} placeholder="Phone number"/>
      <div>
        <div className={actionButton}>Add</div>
        <div className={actionButton} onClick={handleHideForm}>Cancel</div>
      </div>
    </div>
  )
}

export default AddContactForm;