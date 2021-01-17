
import Popup from './Popup.js';
class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler; //not correct yet

  }

  // collects data from all the input fields
  _getInputValues() {
    const inputs = this._form.querySelectorAll('.popup__input');
    const value = {};

    inputs.forEach(item => {
      value[input.name] = input.value;
    })

    return value;

  }

  // resets form on close
  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    const form = this._popup.querySelector('.form');

    form.addEventListener('submit',() => {
      this._submitHandler();
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