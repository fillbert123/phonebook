import React, { useEffect, useState } from "react";
import {useQuery, useMutation} from '@apollo/client'
import {GET_CONTACT_DETAIL} from '../graphql/queries'
import {DELETE_CONTACT, EDIT_CONTACT, EDIT_PHONE_NUMBER} from '../graphql/mutations'
import { 
  modalBottom, 
  actionButton, 
  contactName, 
  profileCard, 
  profileCardInput, 
  deleteConfirmation,
  editConfirmation,
  mainInteraction,
  activeActionButton,
  inactiveActionButton,
  profileCardShow
} from "../styles/style";
import xmark from "../assets/xmark.circle.fill.blue.svg"
import cancel from "../assets/arrow.uturn.backward.svg"
import star from "../assets/star.fill.svg"
import starblue from "../assets/star.fill.blue.svg"
import pencil from "../assets/pencil.svg"
import trash from "../assets/trash.fill.svg"
import done from "../assets/checkmark.svg"

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

interface ProfileCardProps {
  profile: number;
  closeProfile: () => void;
  toggleTicker: (type: string, message: string) => void;
  contact: Contact[];
}

interface phone {
  number: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({profile, closeProfile, toggleTicker, contact}) => {
  const {loading, data} = useQuery(GET_CONTACT_DETAIL, {
    variables: {
      id: profile
    }
  });
  const [newContact, setNewContact] = useState({
    first_name: '',
    last_name: ''
  });
  const [deleteContact] = useMutation(DELETE_CONTACT);
  const [editContact] = useMutation(EDIT_CONTACT);
  const [showMainInteraction, setShowMainInteraction] = useState(true);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const currentList = localStorage.getItem('favorites');
  const currentArray = (currentList == undefined) ? [] : currentList.split('#'); 
  const profileIndex = currentArray.indexOf(profile.toString());
  const alphabeticalValidation = /^[a-zA-Z]+$/

  useEffect(() => {
    setErrorMessage('');

    if (newContact.first_name !== '') {
      if (!alphabeticalValidation.test(newContact.first_name)) {
        setErrorMessage('First name should not contain number');
      }
    }
    else if (newContact.last_name !== '') {
      if (!alphabeticalValidation.test(newContact.last_name)) {
        setErrorMessage('Last name should not contain number');
      }
    }
  }, [newContact])

  const handleCloseProfile = () => {
    closeProfile();
  }

  const toggleDeleteConfirmation = () => {
    setShowDeleteConfirmation(!showDeleteConfirmation);
    setShowMainInteraction(!showMainInteraction);
  }

  const toggleEditConfirmation = () => {
    setShowEditConfirmation(!showEditConfirmation);
    setShowMainInteraction(!showMainInteraction);
    setEditMode(!editMode);
  }
  
  const handleFavorite = () => {
    if ( profileIndex === -1 ) {
      currentArray.push(profile.toString());
      toggleTicker("success", `${data.contact_by_pk.first_name} ${data.contact_by_pk.last_name} was added to favorite list`);
    } else {
      currentArray.splice(profileIndex, 1);
      toggleTicker("error", "Something went wrong");
      toggleTicker("success", `${data.contact_by_pk.first_name} ${data.contact_by_pk.last_name} was removed from favorite list`);
    }
    const newList = currentArray.join('#');
    localStorage.setItem('favorites', newList);
    closeProfile();
  }

  const handleDeleteProfile = async () => {
    try {
      const {data} = await deleteContact({
        variables: {
          id: profile
        }
      })
      closeProfile();
    }
    catch (error) {
      toggleTicker("error", "Something went wrong");
    }
  }

  const checkExistingDuplicate = () => {
    let flag = false;
    contact.map((account) => {
      if (account.first_name === newContact.first_name && account.last_name === newContact.last_name) {
        if (newContact.first_name !== data.contact_by_pk.first_name || newContact.first_name !== data.contact_by_pk.first_name) {
          flag = true;
        }
      }
    })
    return (flag);
  }

  const handleEditProfile = async () => {
    if (errorMessage.length === 0) {
      if (newContact.first_name === '') {
        newContact.first_name = data.contact_by_pk.first_name
      }
      if (newContact.last_name === '') {
        newContact.last_name = data.contact_by_pk.last_name
      }
      const existingDuplicate = checkExistingDuplicate();
      if (existingDuplicate) {
        toggleTicker("error", `${newContact.first_name} ${newContact.last_name} has been taken`);
      }
      else {
        try {
          const {data} = await editContact({
            variables: {
              id: profile,
              _set: newContact
            }
          })
          toggleTicker("success", `${newContact.first_name} ${newContact.last_name} was successfully edited`);
          closeProfile();
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

  return (
    <>
      {
        !loading && 
          <div className={[modalBottom, profileCard].join(' ')}>
            <div>
              <div>
                {
                  showEditConfirmation && (
                    <div>Editing</div>
                  )
                }
                {
                  showDeleteConfirmation && (
                    <div>Delete</div>
                  )
                }
                <div className={contactName}>
                  <div>{data.contact_by_pk.first_name}</div>
                  <div>{data.contact_by_pk.last_name}</div>
                </div>
                {
                  showDeleteConfirmation && (
                    <div>?</div>
                  )
                }
              </div>
              <div>
                <img src={xmark} alt="" onClick={handleCloseProfile}/>
              </div>
            </div>
            {
              showMainInteraction &&
                <div className={mainInteraction}>
                  {
                    (profileIndex == -1)
                    ? <div className={[actionButton, inactiveActionButton].join(' ')} onClick={handleFavorite}>
                        <img src={starblue} alt="" />
                        <div>Favorite</div>
                      </div>
                    : <div className={[actionButton, activeActionButton].join(' ')} onClick={handleFavorite}>
                        <img src={star} alt="" />
                        <div>Remove</div>
                      </div>
                  }
                  <div className={actionButton} onClick={toggleEditConfirmation}>
                    <img src={pencil} alt="" />
                    <div>Edit</div>
                  </div>
                  <div className={actionButton} onClick={toggleDeleteConfirmation}>
                    <img src={trash} alt="" />
                    <div>Delete</div>
                  </div>
                </div>
            }
            {
              showDeleteConfirmation &&
                <div className={deleteConfirmation}>
                  <div className={actionButton} onClick={handleDeleteProfile}>
                    <img src={trash} alt="" />
                    <div>Delete</div>
                  </div>
                  <div className={actionButton} onClick={toggleDeleteConfirmation}>
                    <img src={cancel} alt="" />
                    <div>Cancel</div>
                  </div>
                </div>
            }
            {
              showEditConfirmation &&
                <div className={editConfirmation}>
                  <div className={actionButton} onClick={handleEditProfile}>
                    <img src={done} alt="" />
                    <div>Done</div>
                  </div>
                  <div className={actionButton} onClick={toggleEditConfirmation}>
                    <img src={cancel} alt="" />
                    <div>Cancel</div>
                  </div>
                </div>
            }
            {
              (editMode) 
              ? <div>
                  <div>First name</div>
                  <input
                    type="text"
                    // value={data.contact_by_pk.first_name}
                    className={profileCardInput} 
                    placeholder="First name"
                    onChange={(event) => {
                      setNewContact(
                        {
                          first_name: event.target.value,
                          last_name: newContact.last_name
                        }
                      )
                    }}
                  />
                  <div>Last name</div>
                  <input
                    type="text"
                    // value={data.contact_by_pk.last_name}
                    className={profileCardInput} 
                    placeholder="Last name"
                    onChange={(event) => {
                      setNewContact(
                        {
                          first_name: newContact.first_name,
                          last_name: event.target.value
                        }
                      )
                    }}
                  />
                  <div>Date added</div>
                  <input
                    type="text"
                    value={data.contact_by_pk.created_at}
                    className={profileCardInput} 
                    placeholder="Date added"
                    disabled
                  />
                  <div>Phone number</div>
                  <div>
                    {
                      data.contact_by_pk.phones.map((number: phone) => (
                        <input
                          type="text"
                          // value={number.number}
                          className={profileCardInput} 
                          placeholder="Phone number"
                          disabled
                        />
                      ))
                    }
                  </div>
                </div>
              : <div>
                  <div>First name</div>
                  <input
                    type="text"
                    value={data.contact_by_pk.first_name}
                    className={profileCardShow} 
                    placeholder="First name"
                    disabled
                  />
                  <div>Last name</div>
                  <input
                    type="text"
                    value={data.contact_by_pk.last_name}
                    className={profileCardShow} 
                    placeholder="Last name"
                    disabled
                  />
                  <div>Date added</div>
                  <input
                    type="text"
                    value={data.contact_by_pk.created_at}
                    className={profileCardShow} 
                    placeholder="Date added"
                    disabled
                  />
                  <div>Phone number</div>
                  <div>
                    {
                      data.contact_by_pk.phones.map((number: phone) => (
                        <input
                          type="text"
                          value={number.number}
                          className={profileCardShow} 
                          placeholder="Phone number"
                          disabled
                        />
                      ))
                    }
                  </div>
                </div>
            }
          </div>
      }
    </>
  )
}

export default ProfileCard;