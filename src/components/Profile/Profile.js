import React from 'react';
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";

const Profile = ({ clothingItems, onSelectCard, onCreateModal }) => {
    return (
      <div className="profile">
        <div className="profile__sidebar">
          <SideBar />
        </div>
        <div>
          <ClothesSection
            onSelectCard={onSelectCard}
            onCreateModal={onCreateModal}
            clothingItems={clothingItems}
          />
        </div>
      </div>
    );
  };
  
  export default Profile;