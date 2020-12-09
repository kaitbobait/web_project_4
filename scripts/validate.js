
const settingsObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButton: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__error_visible"
}; 


// displays the error message by adding the input error message class
const showInputError = (formElement, inputElement, errorMessage) => {
  const inputError = formElement.querySelector(`.${settingsObject.inputErrorClass}-error`);
  //add error classList to input element
  inputElement.classList.add(settingsObject.inputErrorClass);
  // make the validation message the error message
  inputError.textContent = errorMessage;
  // make error visible
  inputElement.classList.add(settingsObject.errorClass);

};

// hides the error message by removing the input error message class
const hideInputError = (formElement, inputElement) => {
  //remove error classList to input element
  inputElement.classList.remove(settingsObject.inputErrorClass);
};

// checks if the input is valid, then calls a function to show or hide the error message
const checkInputValidity = (formElement, inputElement) => {
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputElement);
  }
};

/* Finds all the inputs in the form, and the submit button, and binds an event listener to each input that calls checkInputValidity and toggleButtonState
*/
const setEventListeners = (formElement, inputElement) => {
  if()
  checkInputValidity(inputElement);
};

// finds forms and adds the "submit" event listener on each
const enableValidation = (settingsObject) => {
  const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));
  formList.forEach((formElement) => {

  });
}