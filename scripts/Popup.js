
class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
  }

  // closes popup by pressing Esc key
  _handleEscClose(evt) {
    const popup = document.querySelector(".popup_open");
      if (evt.key === "Escape") {
        if(popup) {
          this.close();
        };
      } 
  }

  // opens popup
  open() {
    this._popup.classList.add('popup_open');
    // adds listener for ESC button
    document.addEventListener("keydown", this._handleEscClose);
  }

  // closes popup
  close() {
    this._popup.classList.remove("popup_open");
    // removes listener for ESC button
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    const closeButton = document.querySelector('.popup__close-button');
    closeButton.addEventListener('click', () => {
      this.close();
    });
  }
}