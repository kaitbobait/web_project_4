import { openPopup, closePopup, closePopupWithEsc, closePopupFromOverlay } from "./utils.js";
import { initialPlaces } from "./initialPlaces.js";


/* add card */
const addPlaceButton = document.querySelector('.profile__add'); //add button
const placesList = document.querySelector('.places__list'); //list of places
const popupEditPlaces = document.querySelector('.popup_edit-places'); //popup for add place form
const imageTitle = document.querySelector('.popup__input_text_image-title'); //input field for title
const imageLink = document.querySelector('.popup__input_text_image'); //input field for image link
const addPlacesExit = document.querySelector('.popup__close-button_places'); //close button

/* places image popup */ 
//need to be in here?
const popupImageLarge = document.querySelector('.popup_image-large');
const popupPhoto = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__image-title');
const imagesExit = document.querySelector('.popup__close-button_images');


class Card {
  constructor(data, template) {
    this._template = template;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
  }

  _getTemplate() {
    const placeTemplate = document.querySelector(this._template).content;
    // clone content of place card template tag
    const placeElement = placeTemplate.cloneNode(true);

    return placeElement;

  }

  _setEventListeners() {
    const heartButton = this._element.querySelector('.places__heart-button');
    // When the heart button is clicked, a new class with a "liked" heart, appears
    const likeButton = place => {
      heartButton.classList.toggle('places__heart-button_active');
    };
    // toggles like button when clicked
    heartButton.addEventListener('click', likeButton);

    // image popup delete button
    const deleteButton = this._element.querySelector('.places__delete-button');

    // removes the selected place card 
    const deletePlace = (evt) => {
      evt.target.closest('.places__item').remove();
    };

    // deletes place card on click of delete button
    deleteButton.addEventListener('click', deletePlace);

    // on click on an image in the place cards, a popup of the image will appear
    this.placeImage.addEventListener('click', () => {
      popupPhoto.src = this.placeImage.src;
      popupTitle.textContent = this.placeName.textContent;
      openPopup(popupImageLarge);
    });
  }

  generateCard() {
    this._element = this._getTemplate();

    const placeImage = this._element.querySelector('.places__img');
    const placeName = this._element.querySelector('.places__name');
    this.placeImage = placeImage;
    this.placeName = placeName;
    
    this.placeImage.src = this._link;
    this.placeName.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

};

const renderElements = (place) => {
  const card = new Card(place, "#place-template");
  const placeElement = card.generateCard();
  placesList.prepend(placeElement); 
}


const onload = () => {
  initialPlaces.forEach((place) => {
    const card = new Card(place, "#place-template")

    const placeElement = card.generateCard();
    placesList.prepend(placeElement); 
  })
}

onload();

export {renderElements}; 