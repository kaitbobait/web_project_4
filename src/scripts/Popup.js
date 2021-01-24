
/**
 * Open and close Popups from:
 * Overlay
 * Close Button
 * Escape Button
 */
class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  // closes popup by pressing Esc key
  _handleEscClose(evt) {
      if (evt.key === "Escape") {
          this.close();
        };
      } 
  
  handleCloseOverlay() {
    if(this._popup.classList.contains('popup_open')) {
      this.close();
    }
  }

  // opens popup
  open() {
    this._popup.classList.add('popup_open');
    // adds listener for ESC button
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }

  // closes popup
  close() {
    this._popup.classList.remove("popup_open");
    // removes listener for ESC button
    document.removeEventListener("keydown", () => {
      this._handleEscClose();
    });
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector('.popup__close-button');
    closeButton.addEventListener('click', () => {
      this.close();
    });

    // const popupOverlay = this._popup.querySelector(".popup");
    // popupOverlay.addEventListener('click', () => {
    //   this.handleCloseOverlay();
    // })
  }

}

export default Popup;