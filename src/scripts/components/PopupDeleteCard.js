
import { popup } from '../utils.js';
import Popup from './Popup.js';
class PopupDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitDelete = document.querySelector('.popup__save-button_delete');
  }

  _openDeletePopup() {
    this.open();
  }

  setSubmitAction(handleSubmitCallback) {
    this._handleSubmitCallback = handleSubmitCallback;
  }

  setEventListeners() {

    super.setEventListeners();

    this._submitDelete.addEventListener("click", () => {
        this._handleSubmitCallback();
      })
    
  }
}

export default PopupDeleteCard;