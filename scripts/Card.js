
import { openPopup, closePopup, closePopupWithEsc, closePopupFromOverlay } from "./utils.js";
import { initialPlaces, popupImageLarge, popupPhoto, popupTitle, placesList } from "./script.js";





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

    this._handleLikeButton();
    this._handleDeleteButton();

    // on click on an image in the place cards, a popup of the image will appear
    this.placeImage.addEventListener('click', () => {
      popupPhoto.src = this.placeImage.src;
      popupPhoto.alt = this.placeName.textContent;
      popupTitle.textContent = this.placeName.textContent;
      openPopup(popupImageLarge);
    });
  }

  _handleLikeButton() {
    const heartButton = this._element.querySelector('.places__heart-button');
    // When the heart button is clicked, a new class with a "liked" heart, appears
    const likeButton = place => {
      heartButton.classList.toggle('places__heart-button_active');
    };
    // toggles like button when clicked
    heartButton.addEventListener('click', likeButton);
  }

  _handleDeleteButton() {
    // image popup delete button
    const deleteButton = this._element.querySelector('.places__delete-button');

    //removes the selected place card 
    const deletePlace = (evt) => {
      evt.target.closest('.places__item').remove();
    };
    // const deletePlace = (evt) => {
    //   this._element.remove();
    // };
  
  


    // deletes place card on click of delete button
    deleteButton.addEventListener('click', deletePlace);
  }

  generateCard() {
    this._element = this._getTemplate();

    const placeImage = this._element.querySelector('.places__img');
    const placeName = this._element.querySelector('.places__name');
    this.placeImage = placeImage;
    this.placeName = placeName;
    
    this.placeImage.src = this._link;
    this.placeName.textContent = this._name;
    this.placeImage.alt = this.placeName.textContent;

    this._setEventListeners();

    return this._element;
  }

};

export { Card };