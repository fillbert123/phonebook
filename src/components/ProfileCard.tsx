import React from "react";
import {useQuery} from '@apollo/client'
import {GET_CONTACT_DETAIL} from '../graphql/queries'
import { modalBottom, actionButton, contactName, profileCard } from "../styles/style";
import xmark from "../assets/xmark.svg"
import star from "../assets/star.fill.svg"
import pencil from "../assets/pencil.svg"
import trash from "../assets/trash.fill.svg"

interface ProfileCardProps {
  profile: number;
  closeProfile: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({profile, closeProfile}) => {
  const {loading, data} = useQuery(GET_CONTACT_DETAIL, {
    variables: {
      id: profile
    }
  });

  const handleCloseProfile = () => {
    closeProfile();
  }

  return (
    <>
      {
        !loading && 
          <div className={[modalBottom, profileCard].join(' ')}>
            <div>
              <div className={contactName}>
                <div>{data.contact_by_pk.first_name}</div>
                <div>{data.contact_by_pk.last_name}</div>
              </div>
              <div>
                <img src={xmark} alt="" onClick={handleCloseProfile}/>
              </div>
            </div>
            <div>
              <div className={actionButton}>
                <img src={star} alt="" />
                <div>Favorite</div>
              </div>
              <div className={actionButton}>
                <img src={pencil} alt="" />
                <div>Edit</div>
              </div>
              <div className={actionButton}>
                <img src={trash} alt="" />
                <div>Delete</div>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default ProfileCard;