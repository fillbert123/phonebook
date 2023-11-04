import React, { useState } from "react";
import {useQuery, useMutation} from '@apollo/client'
import {GET_CONTACT_DETAIL} from '../graphql/queries'
import {DELETE_CONTACT} from '../graphql/mutations'
import { 
  modalBottom, 
  actionButton, 
  contactName, 
  profileCard, 
  userInput, 
  deleteConfirmation,
  editConfirmation,
  mainInteraction,
  activeActionButton,
  inactiveActionButton
} from "../styles/style";
import xmark from "../assets/xmark.circle.fill.svg"
import cancel from "../assets/arrow.uturn.backward.svg"
import star from "../assets/star.fill.svg"
import starblue from "../assets/star.fill.blue.svg"
import pencil from "../assets/pencil.svg"
import trash from "../assets/trash.fill.svg"
import done from "../assets/checkmark.svg"

interface ProfileCardProps {
  profile: number;
  closeProfile: () => void;
}

interface phone {
  number: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({profile, closeProfile}) => {
  const {loading, data} = useQuery(GET_CONTACT_DETAIL, {
    variables: {
      id: profile
    }
  });
  const [deleteContact] = useMutation(DELETE_CONTACT);
  const [showMainInteraction, setShowMainInteraction] = useState(true);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);

  const currentList = localStorage.getItem('favorites');
  const currentArray = (currentList == undefined) ? [] : currentList.split('#'); 
  const profileIndex = currentArray.indexOf(profile.toString());

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
  }
  
  const handleFavorite = () => {
    ( profileIndex === -1 )
      ? currentArray.push(profile.toString())
      : currentArray.splice(profileIndex, 1);
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
      console.log(error);
    }
  }
  const handleEditProfile = () => {

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
            <div>
              <div>First name</div>
              <input
                type="text"
                value={data.contact_by_pk.first_name}
                className={userInput} 
                placeholder="First name"
                disabled
              />
              <div>Last name</div>
              <input
                type="text"
                value={data.contact_by_pk.last_name}
                className={userInput} 
                placeholder="Last name"
                disabled
              />
              <div>Date added</div>
              <input
                type="text"
                value={data.contact_by_pk.created_at}
                className={userInput} 
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
                      className={userInput} 
                      placeholder="Phone number"
                      disabled
                    />
                  ))
                }
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default ProfileCard;