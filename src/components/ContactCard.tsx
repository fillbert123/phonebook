import React from "react";
import {contactCard, contactName} from "../styles/style"
import chevron from "../assets/chevron.right.svg"

interface ContactCardProps {
  contactInfo: {
    id: number,
    first_name: string,
    last_name: string,
    created_at: string,
    phones: Phone[]
  },
  showProfile: (data: number) => void;
}

interface Phone {
  number: number
}

const ContactCard: React.FC<ContactCardProps> = ({contactInfo, showProfile}) => {
  const handleShowProfile = () => {
    showProfile(contactInfo.id);
  }

  return (
    <div className={contactCard} onClick={handleShowProfile}>
      <div>
        <div className={contactName}>
          <div>{contactInfo.first_name}</div>
          <div>{contactInfo.last_name}</div>
        </div>
        <img src={chevron} alt="" />
      </div>
      <div>
        {
          contactInfo.phones.map((phone: Phone, index: number) => (
            <div key={index}>{phone.number}</div>
          ))
        }
      </div>
    </div>
  )
}

export default ContactCard;