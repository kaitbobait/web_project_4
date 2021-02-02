
import Api from "./components/Api.js";
import "../page/index.css";
import 
  { initialPlaces, settingsObject, imagesExit, placesForm, popup, newName, newTitle, addPlacesExit, addPlaceButton, editButton, profileName, profileTitle, profileExit }
from "./utils.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Popup from './components/Popup.js'; 
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-8",
  headers: {
    authorization: "b69d5aa5-1ef4-42e6-80ff-c5b2987c86bb",
    "Content-Type": "application/json"
  }
});

/** 
 * create a new instance of Card
 * call imagePopup on click, which opens and popuplates the popup Image
 * template: clones the template
 * generates a card from the template
 * returns new Card element
*/
const createCard = (item) => {
  const card = new Card({
    data: item, 
    handleCardClick: (name, link) => {
      imagePopup.open(name, link)
  }, 
  template: "#place-template"});
  const placeElement = card.generateCard();
  return placeElement;
}

/**
 * creates an instance of PopupWithImage
 * takes in the large image class in the template
 */
const imagePopup = new PopupWithImage('.popup_image-large');
imagePopup.setEventListeners();
/**
 * Creates a new instance of UserInfo
 * Takes in the classes of the profile section that display "content"
 */
const newUserInfo = new UserInfo({nameSelector:'.profile__name', jobSelector: '.profile__title'});

const newSection = new Section({
  items: initialPlaces,
  renderer:(item) => {
    const placeElement = createCard(item);
    newSection.addItem(placeElement);
  }
},
  ".places__list");
  newSection.renderItems();


const editProfilePopup = new PopupWithForm('.popup_edit-profile', (values) => {
  newUserInfo.setUserInfo(values);
});

editProfilePopup.setEventListeners();

const addPlacesPopup = new PopupWithForm('.popup_edit-places', (data) => {
  const newCard = createCard(data);
  newSection.addItem(newCard);

})

addPlacesPopup.setEventListeners();


// when clicks, the edit popup box opens
editButton.addEventListener('click', () => {
  newName.value = profileName.textContent;
  newTitle.value = profileTitle.textContent;
  editProfilePopup.open();
  
});
// when clicks, the edit popup box closes
profileExit.addEventListener('click', () => {
  editProfilePopup.close();
});
// when clicks, the popup box opens 
addPlaceButton.addEventListener('click', () => {
  addPlacesPopup.open();
  resetForm(placesForm);
  
});
// when clicks, the add places popup box closes
addPlacesExit.addEventListener('click', () => {
  addPlacesPopup.close();
});

// on click of close button, the popup image will disappear
imagesExit.addEventListener('click', () => {
  imagePopup.close();
});


// reset form, may delete, created in PopupWithForm class
const resetForm = (form) => {
  form.reset();
}

/**
 * creates an array of new forms
 * for each form, an instance of FormValidator is created
 * calls function to begin validation
 */
const renderFormValidation = () => {

  const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));
  formList.forEach((formElement) => {
    const formValidator = new FormValidator(settingsObject, formElement);
    formValidator.enableValidation(settingsObject);
  });
};

renderFormValidation();







