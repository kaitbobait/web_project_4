
/**
 * Open and close Popups from:
 * Overlay
 * Close Button
 * Escape Button
 */
class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose =  this._handleEscClose.bind(this);
    this.handleCloseOverlay = this.handleCloseOverlay.bind(this);
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
    document.addEventListener("keydown", this._handleEscClose);

    this._popup.addEventListener('click', this.handleCloseOverlay);
  }

  // closes popup
  close() {
    this._popup.classList.remove("popup_open");
    // removes listener for ESC button
    document.removeEventListener("keydown", this._handleEscClose);

    this._popup.removeEventListener('click', this.handleCloseOverlay); 
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector('.popup__close-button');
    closeButton.addEventListener('click', () => {
      this.close();
    });
  }

}

export default Popup;