
import Popup from './Popup.js';
class PopupDeleteCard extends Popup {
  constructor(popupSelector, cardSelector) {
    super(popupSelector);
    this._cardSelector = document.querySelector(cardSelector);
    // this._submitHandler = submitHandler;
  }

  _openDeletePopup() {
    console.log(this._popup);
    this.open();
    
  }

  setEventListeners() {
    super.setEventListeners();
    
    this._cardSelector.addEventListener('click', () => {
      console.log('hello');
      this._openDeletePopup();

    })

  }
}

export default PopupDeleteCard;