
class FormValidator {
  constructor(settingsObject, formElement) {
    this.settingsObj = settingsObject;
    this._inputSelector = settingsObject.inputSelector;
    this._submitButton = settingsObject.submitButton;
    this._inactiveButtonClass = settingsObject.inactiveButtonClass;
    this._inputErrorClass = settingsObject.inputErrorClass;
    this._inputBorderError = settingsObject.inputBorderError;
    this.formElement = formElement;
  }

  // displays the error message by adding the input error message class
  _showInputError(inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputBorderError);
    // make the validation message the error message
    errorElement.textContent = errorMessage;

  };

  // hides the error message by removing the input error message class
  _hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputBorderError);
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


export default FormValidator;