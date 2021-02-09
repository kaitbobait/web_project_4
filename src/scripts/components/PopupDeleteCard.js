
import { popup } from '../utils.js';
import Popup from './Popup.js';
class PopupDeleteCard extends Popup {
  constructor(popupSelector, setSubmitAction) {
    super(popupSelector);
    
    this._handleSubmitCallback = setSubmitAction;
    this._submitDelete = document.querySelector('.popup__save-button_delete');
  }

  _openDeletePopup() {
    this.open();
  }

  setSubmitAction(action) {
    this._handleSubmitCallback(action);
  }

  setEventListeners() {

    super.setEventListeners();

    this._submitDelete.addEventListener("click", () => {
        console.log('delete me');
        console.log(this._handleSubmitCallback);
        this.setSubmitAction();
      })
    
  }
}

export default PopupDeleteCard;