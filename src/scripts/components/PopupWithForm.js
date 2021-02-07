
import Popup from './Popup.js';
class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler; 
    this._form = this._popup.querySelector('.form');
    this._saveButton = this._popup.querySelector('.popup__save-button');
  }

  // collects data from all the input fields
  _getInputValues() {
    const inputs = this._form.querySelectorAll('.popup__input');
    const value = {};

    inputs.forEach(input => {
      value[input.name] = input.value;
    })

    return value;

  }

  // resets form on close
  close() {
    super.close();
    this._form.reset();
  }

  isLoading(status) {
    if(status){
      this._saveButton.textContent = "Saving...";
      console.log(this._saveButton.textContent);
    } else {
      this._saveButton.textContent = "";
      console.log(this._saveButton.textContent);
    }
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      this.isLoading(true);
      console.log('loading');
      const values = this._getInputValues();
      this._submitHandler(values);

      evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
      
      this.close();
      this.isLoading(false);
      console.log('loaded');
    })


    //this._popup.addEventListener('submit', () => {

    // })

    // this._submitHandler.addEventListener("submit", (evt) => {
    //   if(this._submitHandler === '.popup__form-profile') {
    //     evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
    //     profileName.textContent = newName.value;
    //     profileTitle.textContent = newTitle.value;
    //     closePopup(popupEditProfile);
    //   } else if(this._submitHandler === '.popup__form-places') {
    //     evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
    //     const place = {
    //       name: imageTitle.value,
    //       link: imageLink.value
    //     }
    //   } 
    // })
  }


}

export default PopupWithForm;