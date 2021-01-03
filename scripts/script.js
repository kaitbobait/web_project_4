import { openPopup, closePopup, closePopupWithEsc, closePopupFromOverlay } from "./utils.js";
import { Card } from "./Card.js";
import { renderFormValidation } from "./FormValidator.js";


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

const initialPlaces = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
]; 



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
profileForm.addEventListener('submit', (evt) => {
  evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
  profileName.textContent = newName.value;
  profileTitle.textContent = newTitle.value;
  closePopup(popupEditProfile);
});

/* when click the save button, runs the submits the form, updates info, exits popup */
placesForm.addEventListener('submit', (evt) => {
  evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
  const place = {
    name: imageTitle.value,
    link: imageLink.value
  }
  // addPlace(place);
  renderElements(place);
  closePopup(popupEditPlaces);
});

const resetForm = (form) => {
  form.reset();
}

// creates a new instance of a Card
const renderElements = (place) => {
  const card = new Card(place, "#place-template");
  const placeElement = card.generateCard();
  placesList.prepend(placeElement); 
};

// creates instance of a Card from an array
const onload = () => {
  initialPlaces.forEach((place) => {
    const card = new Card(place, "#place-template")

    const placeElement = card.generateCard();
    placesList.append(placeElement); 
  })
};




closePopupFromOverlay();

// allows the pre-existing cards to automatically load onload of site
onload();


export { initialPlaces }; 
