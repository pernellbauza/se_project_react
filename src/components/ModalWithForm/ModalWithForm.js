import "./ModalWithForm.css";
import React from "react";
import AddItemModal from "../AddItemModal/AddItemModal";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  state = { disabled: true },
  ref,
  onSubmit,
}) => {

  //const ref = useRef();

  //const handleOutsideClick = (e) => {
  //  if (ref.current && !ref.current.contains(e.target)) {
  //    onClose();
  //  }
  //};

  //const handleSubmit = (e) => {
  //  e.preventDefault();
  //  onSubmit();
  //};

  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__form_content" ref={ref}>
          <button
            className="modal__close_button"
            type="button"
            onClick={onClose}
          ></button>
          <h3 className="modal__title">{title}</h3>

          <form className="modal__title" onSubmit={onSubmit}>
            {children}
            <button
              className="modal__button"
              // disabled={state}
              type="submit"
            >
              {buttonText}
            </button>
          </form>
      
      </div>
    </div>
  );
};

export default ModalWithForm;
