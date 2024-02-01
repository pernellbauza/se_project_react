import React from "react";
import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ onClose, isLoading, onSubmit }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(`${currentUser.name}`);
  const [avatar, setAvatar] = React.useState(`${currentUser.avatar}`);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, avatar });
  };

  return (
    <ModalWithForm
      onClose={onClose}
      buttonText={isLoading ? "Loading ..." : "Next"}
      title={"Change Profile Data"}
      name={"edit"}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="300"
          value={`${name}`}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          className="modal__input"
          type="url"
          name="avatar"
          minLength="1"
          maxLength="300"
          value={`${avatar}`}
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
