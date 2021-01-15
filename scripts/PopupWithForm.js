
class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmission) {
    super(popupSelector);
    this._formSubmission = formSubmission; //not correct yet

  }

  // collects data from all the input fields
  _getInputValues() {
    
  }

  setEventListeners() {
    //const popupForm = document.querySelector('.popup__form')
    this._formSubmission.addEventListener("submit", (evt) => {
      if(this._formSubmission === '.popup__form-profile') {
        evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
        profileName.textContent = newName.value;
        profileTitle.textContent = newTitle.value;
        closePopup(popupEditProfile);
      } else if(this._formSubmission === '.popup__form-places') {
        evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
        const place = {
          name: imageTitle.value,
          link: imageLink.value
        }
      } 
    })
  }
  
  // resets form on close
  close() {
    this._formSubmission.reset();

  }

}