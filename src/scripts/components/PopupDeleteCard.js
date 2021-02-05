
import Popup from './Popup.js';
class PopupDeleteCard extends Popup {
  constructor(popupSelector, cardSelector, submitHandler) {
    super(popupSelector);
    this._cardSelector = document.querySelector(cardSelector);
    this._submitHandler = submitHandler;
  }

  _openDeletePopup() {
    console.log(this._popup);
    this.open();
    
  }



  setEventListeners() {
    super.setEventListeners();
    
    this._cardSelector.addEventListener('click', () => {
      this._openDeletePopup();

    })
    this._submitHandler();
  }
}

export default PopupDeleteCard;