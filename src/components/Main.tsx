import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ContactGroup from "./ContactGroup";
import { addContact, listSection, modalBackground, searchSection } from "../styles/style";
import AddContactForm from "./AddContactForm";
import ProfileCard from "./ProfileCard";
import Ticker from "./Ticker";
import addContactPlus from "../assets/person.crop.circle.fill.badge.plus.svg"
import { useQuery } from "@apollo/client";
import { GET_CONTACT_LIST } from "../graphql/queries";

const Main = () => {
  const {loading, data, refetch} = useQuery(GET_CONTACT_LIST);
  const [showForm, setShowForm] = useState(false);
  const [profile, setProfile] = useState(0);

  const toggleForm = () => {
    setProfile(0);
    setShowForm(!showForm);
    refetch();
  }

  const showProfile = (data: number) => {
    setShowForm(false);
    setProfile(data);
  }

  const hideProfile = () => {
    setProfile(0);
  }

  return (
    <div>
        <div className={searchSection}>
          <SearchBar showProfile={showProfile} />
        </div>
        <div className={listSection}>
          {
            !loading &&
              <ContactGroup data={data.contact} loading={loading} showProfile={showProfile}/>
          }
        </div>
        <div className={addContact} onClick={toggleForm}>
          <img src={addContactPlus} alt="" />
        </div>
        <div>
          {
            showForm && <AddContactForm hideForm={toggleForm}/>
          }
          {
            profile !== 0 && <ProfileCard closeProfile={hideProfile} profile={profile} />
          }
          {
            (showForm || profile !== 0) && <div className={modalBackground}></div>
          }
          {/* <Ticker type="error" /> */}
        </div>
      </div>
  )
}

export default Main;