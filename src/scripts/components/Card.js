
class Card {
  constructor({data, handleCardClick, template, isMine, handleDeleteCard}) {
    this._template = template;

    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;

    this._handleCardClick = handleCardClick;
    this._isMine = isMine;

    this._handleDeleteCard = handleDeleteCard;
  }

  _getTemplate() {
    const placeTemplate = document.querySelector(this._template).content;
    // clone content of place card template tag
    const placeElement = placeTemplate.cloneNode(true);

    return placeElement;

  }


  _setEventListeners() {

    this._handleLikeButton();
    // this._handleDeleteButton();
    this.placeImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
    
    this._trashButton.addEventListener('click', () => {
      this._handleDeleteCard();
    })

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

  _removeDeleteButton() {
    // image popup delete button
    
      this._trashButton.style.display = "none";

  }


  generateCard() {
    this._element = this._getTemplate();

    const placeImage = this._element.querySelector('.places__img');
    const placeName = this._element.querySelector('.places__name');
    this._trashButton = this._element.querySelector('.places__delete-button');
    
    this.placeImage = placeImage;
    this.placeName = placeName;
    
    this.placeImage.src = this._link;
    this.placeName.textContent = this._name;
    this.placeImage.alt = this.placeName.textContent;

    if(!this._isMine) {
      this._removeDeleteButton();
    }
    
    this._setEventListeners();
    return this._element.firstElementChild;
  }

};

export default Card;