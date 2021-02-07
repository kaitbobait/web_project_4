
import Popup from './Popup.js';
class PopupDeleteCard extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
  }

  _openDeletePopup() {
    this.open();
    this._submitHandler();
  }

}

export default PopupDeleteCard;