
import Popup from './Popup.js';
class PopupDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  _openDeletePopup() {
    this.open();
  }

}

export default PopupDeleteCard;