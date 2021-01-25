import Popup from './Popup.js';


/**
 * Opens a popup of the selected Card Image
 * in Open(), uses the src and caption arguments to populate Card Image
 */
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPhoto = this._popup.querySelector('.popup__image');
    this._popupTitle = this._popup.querySelector('.popup__image-title');
  }

  open(newCaption, newSrc) {
    super.open();
    
    this._popupPhoto.src = newSrc;
    this._popupTitle.textContent = newCaption;
  }
}

export default PopupWithImage;
