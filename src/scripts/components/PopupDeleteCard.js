
import Popup from './Popup.js';
class PopupDeleteCard extends Popup {
  constructor(popupSelector, cardSelector, submitHandler) {
    super(popupSelector);
    this._cardSelector = document.querySelector(cardSelector);
    this._submitHandler = submitHandler;
    this._card = this._cardSelector.closest(".places__item");
  }

  _openDeletePopup() {
    console.log(this._popup);
    this.open();
    this._submitHandler();
  }

  removeCard() {
    this._card.remove();
  }

  setEventListeners() {
    super.setEventListeners();
    
    this._cardSelector.addEventListener('click', () => {
      this._openDeletePopup();

    })
  }
}

export default PopupDeleteCard;