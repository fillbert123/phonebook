import React from "react";
import { modalBottom } from "../styles/style";

interface ProfileCardProps {
  profile: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({profile}) => {
  return (
    <div className={modalBottom}>
      {profile}
    </div>
  )
}

export default ProfileCard;