import { initialPlaces, settingsObject, openPopup, closePopup, closePopupWithEsc, closePopupFromOverlay } from "./utils.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Popup from './Popup.js'; 
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";


/*profile section*/
const editButton = document.querySelector('.profile__edit'); //edit profile button
const popupEditProfile = document.querySelector('.popup_edit-profile'); //edit profile popup
const profileName = document.querySelector('.profile__name'); //profile name
const profileTitle = document.querySelector('.profile__title'); //profile description
const profileExit = document.querySelector('.popup__close-button_profile'); //close button

/* add card */
const addPlaceButton = document.querySelector('.profile__add'); //add button
const placesList = document.querySelector('.places__list'); //list of places
const popupEditPlaces = document.querySelector('.popup_edit-places'); //popup for add place form
const imageTitle = document.querySelector('.popup__input_text_image-title'); //input field for title
const imageLink = document.querySelector('.popup__input_text_image'); //input field for image link
const addPlacesExit = document.querySelector('.popup__close-button_places'); //close button

/* form section */
const popup = document.querySelector('.popup'); /*popup has display: none*/
const newName = document.querySelector('.popup__input_text_name'); /*name written in the name input */
const newTitle = document.querySelector('.popup__input_text_title'); /*title written in the title input */
const saveButton = document.querySelectorAll('.popup__save-button'); /* save button */
const placesForm = document.querySelector('.popup__form-places');
const profileForm = document.querySelector('.popup__form-profile');
const form = document.querySelector('.form');

/* places image popup */
const popupImageLarge = document.querySelector('.popup_image-large');
const popupPhoto = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__image-title');
const imagesExit = document.querySelector('.popup__close-button_images');


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

// creates instance of a Card from an array
// const onload = () => {
//   initialPlaces.forEach((place) => {
//     const card = new Card(place, "#place-template")

//     const placeElement = card.generateCard();
//     placesList.append(placeElement); 
//   })
// };



// when clicks, the edit popup box opens
editButton.addEventListener('click', () => {
  newName.value = profileName.textContent;
  newTitle.value = profileTitle.textContent;
  openPopup(popupEditProfile);
});
// when clicks, the edit popup box closes
profileExit.addEventListener('click', () => {
  closePopup(popupEditProfile);
});
// when clicks, the popup box opens 
addPlaceButton.addEventListener('click', () => {
  openPopup(popupEditPlaces);
  resetForm(placesForm);
});
// when clicks, the add places popup box closes
addPlacesExit.addEventListener('click', () => {
  closePopup(popupEditPlaces);
});

// on click of close button, the popup image will disappear
imagesExit.addEventListener('click', () => {
  closePopup(popupImageLarge);

});

/* when click the save button, runs the submits the form, updates info, exits popup */
// profileForm.addEventListener('submit', (evt) => {
//   evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
//   profileName.textContent = newName.value;
//   profileTitle.textContent = newTitle.value;
//   closePopup(popupEditProfile);
// });
profileForm.addEventListener('submit', (evt) => {
  evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
  closePopup(popupEditProfile);
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

closePopupFromOverlay();

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





export { initialPlaces, popupImageLarge, popupPhoto, popupTitle, placesList, placesForm, imageLink }; 
