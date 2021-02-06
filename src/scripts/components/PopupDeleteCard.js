
import Popup from './Popup.js';
class PopupDeleteCard extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
  }

  _openDeletePopup() {
    console.log(this._popup);
    this.open();
    this._submitHandler();
  }

  setEventListeners() {
    super.setEventListeners();
    
    // this._cardSelector.addEventListener('click', () => {
    //   this._openDeletePopup();

    // })
  }
}

export default PopupDeleteCard;