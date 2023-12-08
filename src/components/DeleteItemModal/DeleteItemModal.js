import closeButton from "../../images/grey-x-button.svg";
import "../ModalWithForm/ModalWithForm.css";
const DeleteItemModal = ({ onClose, deleteCard }) => {
  return (
    <div className={`modal delete`}>
      <div className="modal__confirm-content">
          <button className="modal__close-button">
              <img src={closeButton} onClick={onClose} alt="Close Button"></img>
          </button>
          <div>Are you sure you want to delete this item?</div>
          <div>This action is irreversible.</div>
    
          <div className="modal__confirm-buttons">
            <button
              className="modal__confirm-button"
              type="button"
              onClick={deleteCard}
            >
              Yes, delete item
            </button>
            <button className="modal__cancel-button" 
              type="button"
              onClick={onClose}>
              Cancel
            </button>
      </div>
    </div>
    </div>
  );
};


export default DeleteItemModal;