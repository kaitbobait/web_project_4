import { openPopup, closePopup, closePopupWithEsc, closePopupFromOverlay } from "./utils.js";


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

class Card {
  constructor(template) {
    this._template = template;
  }

  _getTemplate() {
    const placeTemplate = document.querySelector(this._template).content;
    // clone content of place card template tag
    const placeElement = placeTemplate.cloneNode(true);

    return placeElement;

  }

  // _openPopup() {
  //   popup.classList.add('popup_open');
  //   // adds listener for ESC button
  //   document.addEventListener("keydown", closePopupWithEsc);
  // }

  // _closePopup() {
  //   popup.classList.remove("popup_open");
  //   // removes listener for ESC button
  //   document.removeEventListener("keydown", closePopupWithEsc);
  // }

  _setEventListeners() {
  //   this._element.addEventListener("click", () => {
  //     this._openPopup();
  //   });

  //   imagesExit.addEventListener("click", () => {
  //     this._closePopup();
  //   })
    
  }

};

class DefaultCard extends Card {
  constructor(data, template) {
    super(template);
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
  }

  generateCard() {
    this._element = super._getTemplate();

    const placeImage = this._element.querySelector('.places__img');
    const placeName = this._element.querySelector('.places__name');
    
    placeImage.src = this._link;
    placeName.textContent = this._name;

    this._setEventListeners();

    return this._element;
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
    const placeImage = this._element.querySelector('.places__img');
    const placeName = this._element.querySelector('.places__name');
    placeImage.addEventListener('click', () => {
      popupPhoto.src = placeImage.src;
      popupTitle.textContent = placeName.textContent;
      openPopup(popupImageLarge);
    });

    super._setEventListeners();
  }

  

}

const renderElements = () => {
  initialPlaces.forEach((item) => {
    const card = new DefaultCard(item, "#place-template")

    const placeElement = card.generateCard();
    placesList.prepend(placeElement); 
  })
}

renderElements();

export {renderElements}; 