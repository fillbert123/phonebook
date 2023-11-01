import React from "react";
import { addContactForm } from "../styles/style";

interface AddContactFormProps {
  hideForm: () => void;
}

const AddContactForm = ({hideForm}: AddContactFormProps) => {
  const handleHideForm = () => {
    hideForm();
  }

  return (
    <div className={addContactForm}>
      <div>Add contact</div>
      <input type="text" name="" id="" placeholder="First name"/>
      <input type="text" name="" id="" placeholder="Last name"/>
      <input type="number" name="" id="" placeholder="Phone number"/>
      <div>
        <div>Add</div>
        <div onClick={handleHideForm}>Cancel</div>
      </div>
    </div>
  )
}

export default AddContactForm;