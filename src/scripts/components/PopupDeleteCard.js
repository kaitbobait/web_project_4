
import Popup from './Popup.js';
class PopupDeleteCard extends Popup {
  constructor(popupSelector, cardSelector, ) {
    super(popupSelector);
    this._cardSelector = document.querySelector(cardSelector);
  }

  _openDeletePopup() {
    console.log(this._popup);
    this.open();
  }

  // _handleDeleteClick(action) {
  //   this._submitHandler = action;
  // }

  setEventListeners() {
    super.setEventListeners();
    
    this._cardSelector.addEventListener('click', () => {
      this._openDeletePopup();
  
    }) 
    // this._handleDeleteClick(); 

  }
}

export default PopupDeleteCard;