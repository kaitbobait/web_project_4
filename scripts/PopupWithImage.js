import Popup from './Popup.js';
import { popupPhoto, popupTitle } from "./script.js";


/**
 * Opens a popup of the selected Card Image
 * in Open(), uses the src and caption arguments to populate Card Image
 */
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(newCaption, newSrc) {
    super.open();

    const popupPhoto = this._popup.querySelector('.popup__image');
    const popupTitle = this._popup.querySelector('.popup__image-title')
    
    popupPhoto.src = newSrc;
    popupTitle.textContent = newCaption;
    console.log(popupTitle.textContent);
  }
}

export default PopupWithImage;
