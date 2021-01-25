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

/**
 * creates a new instance of Section
 * takes in an array of items
 * take in each item in array and creates a card instance
 * adds each item 
 */
// const initialCardsList = new Section({
//   items: initialPlaces,
//   renderer:(item) => {
//     const placeElement = createCard(item);

//       initialCardsList.addItem(placeElement);
//   }
// },
//   ".places__list");

// newSection.renderItems();

// initializes the initialPlaces array to be rendered
// initialCardsList.renderItems();



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


/* when click the save button, runs the submits the form, updates info, exits popup */
// placesForm.addEventListener('submit', (evt) => {
//   evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
//   const place = {
//     name: imageTitle.value,
//     link: imageLink.value
//   }
  
//   const newCard = createCard(place);
//   newSection.addItem(newCard);
//   // closePopup(popupEditPlaces);
// });

// reset form, may delete, created in PopupWithForm class
const resetForm = (form) => {
  form.reset();
}

//recreated
// creates a new instance of a Card
// const renderElements = (place) => {
//   const card = new Card(place, "#place-template", (link, name) => {
//     imagePopup.open(link, name);
//   });
//   const placeElement = card.generateCard();
//   placesList.prepend(placeElement); 
// };

// recreated
// creates instance of a Card from an array
// const onload = () => {
//   initialPlaces.forEach((place) => {
//     const card = new Card(place, "#place-template")

//     const placeElement = card.generateCard();
//     placesList.append(placeElement); 
//   })
// };

// allows the pre-existing cards to automatically load onload of site


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



