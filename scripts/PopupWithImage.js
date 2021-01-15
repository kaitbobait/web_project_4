
import { popupPhoto, popupTitle } from "./script.js";

class PopupWithImage extends Popup {
  constructor(poupSelector) {
    super(popupSelector);
  }

  open() {
    const placeImage = this_popup.querySelector('.places__img'); //likely will not work
    popupPhoto.src = this.placeImage.src;
    popupPhoto.alt = this.placeName.textContent;
    popupTitle.textContent = this.placeName.textContent;
  }
}