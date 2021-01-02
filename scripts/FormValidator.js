
import { openPopup, closePopup, closePopupWithEsc, closePopupFromOverlay } from "./utils.js";

const settingsObject = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButton: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input-error"
};


// // displays the error message by adding the input error message class
// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

//   // make the validation message the error message
//   errorElement.textContent = errorMessage;

// };

// // hides the error message by removing the input error message class
// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

//   //remove error classList to input element
//   errorElement.textContent = "";
// };

// // checks if the input is valid, then calls a function to show or hide the error message
// const checkInputValidity = (formElement, inputElement) => {
//   if(!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// // checks input elements to see if any of them are false
// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// // checks hasInvalidInput() to see if any inputs are not valid to determine button state
// const toggleButtonState = (settingsObject, inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(settingsObject.inactiveButtonClass);
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.classList.remove(settingsObject.inactiveButtonClass);
//     buttonElement.disabled = false;
//   }
// };


// /* Finds all the inputs in the form, and the submit button, and binds an event listener to each input that calls checkInputValidity and toggleButtonState
// */
// const setEventListeners = (settingsObject, formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll(settingsObject.inputSelector));
//   const buttonElement = formElement.querySelector(settingsObject.submitButton);
//   //check inputs if validated first, to set save button
//   toggleButtonState(settingsObject, inputList, buttonElement);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", function() {
//       checkInputValidity(formElement, inputElement);
//       toggleButtonState(settingsObject, inputList, buttonElement);


//     });
//   });
// };

// // finds forms and adds the "submit" event listener on each
// const enableValidation = (settingsObject) => {
//   const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//     });
//     setEventListeners(settingsObject, formElement);
//   });
// };
// enableValidation(settingsObject);


class FormValidator {
  constructor(settingsObject, formElement) {
    this.settingsObj = settingsObject;
    this._inputSelector = settingsObject.inputSelector;
    this._submitButton = settingsObject.submitButton;
    this._inactiveButtonClass = settingsObject.inactiveButtonClass;
    this._inputErrorClass = settingsObject.inputErrorClass;
    this.formElement = formElement;
  }

  // displays the error message by adding the input error message class
  _showInputError(inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(`#${inputElement.id}-error`);

    // make the validation message the error message
    errorElement.textContent = errorMessage;

  };

  // hides the error message by removing the input error message class
  _hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(`#${inputElement.id}-error`);

    //remove error classList to input element
    errorElement.textContent = "";
  };

  // checks if the input is valid, then calls a function to show or hide the error message
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  // checks input elements to see if any of them are false
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  // checks hasInvalidInput() to see if any inputs are not valid to determine button state
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };


  /* Finds all the inputs in the form, and the submit button, and binds an event listener to each input that calls checkInputValidity and toggleButtonState
  */
  _setEventListeners() {
    const inputList = Array.from(this.formElement.querySelectorAll(this._inputSelector));
    // this.inputList = inputList;
    const buttonElement = this.formElement.querySelector(this._submitButton);
    //check inputs if validated first, to set save button
    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);

      });
    });
  };

  enableValidation(settingsObject) {

    this.formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    this._setEventListeners();
  };

};

const renderFormValidation = () => {

  const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));
  formList.forEach((formElement) => {
    const formValidator = new FormValidator(settingsObject, formElement);
    formValidator.enableValidation(settingsObject);
  });
};

renderFormValidation();

export { renderFormValidation };