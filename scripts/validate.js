
const settingsObject = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButton: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__error_visible"
}; 


// displays the error message by adding the input error message class
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  //add error classList to input element
  //inputElement.classList.add(settingsObject.inputErrorClass);
  // make the validation message the error message
  errorElement.textContent = errorMessage;
  // make error visible
  //inputElement.classList.add(settingsObject.errorClass);

};

// hides the error message by removing the input error message class
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  
  //remove error classList to input element
  //inputElement.classList.remove(settingsObject.inputErrorClass);
  //errorElement.classList.remove(settingsObject.errorClass);
  errorElement.textContent = "";
};

// checks if the input is valid, then calls a function to show or hide the error message
const checkInputValidity = (formElement, inputElement) => {
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// checks input elements to see if any of them are false
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// checks hasInvalidInput() to see if any inputs are not valid to determine button state
const toggleButtonState = (settingsObject, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settingsObject.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settingsObject.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};


/* Finds all the inputs in the form, and the submit button, and binds an event listener to each input that calls checkInputValidity and toggleButtonState
*/
const setEventListeners = (settingsObject, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(settingsObject.inputSelector));
  const buttonElement = formElement.querySelector(settingsObject.submitButton);
  //check inputs if validated first, to set save button
  toggleButtonState(settingsObject, inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function() {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(settingsObject, inputList, buttonElement);
      
      
    });
  });
};

// finds forms and adds the "submit" event listener on each
const enableValidation = (settingsObject) => {
  const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(settingsObject, formElement);
  });
};
enableValidation(settingsObject);

