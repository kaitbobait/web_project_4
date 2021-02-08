
class Card {
  constructor({data, handleCardClick, template, isMine, myId, handleDeleteCard, handleCardLikes}) {
    this._template = template;
    this._element = this._getTemplate();

    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._likes = data.likes;

    this._handleCardClick = handleCardClick;
    this._isMine = isMine;
    this._myId = myId;

    this._handleDeleteCard = handleDeleteCard;
    this.handleCardLikes = handleCardLikes;

    this._heartButton = this._element.querySelector('.places__heart-button');
    this._heartCount = this._element.querySelector('.places__heart-count');
  }

  _getTemplate() {
    const placeTemplate = document.querySelector(this._template).content;
    // clone content of place card template tag
    const placeElement = placeTemplate.cloneNode(true);

    return placeElement;

  }


  _setEventListeners() {

    // this._handleLikeButton();
    // this._handleDeleteButton();
    this.placeImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
    
    this._trashButton.addEventListener('click', () => {
      this._handleDeleteCard();
    })
    
    this._heartButton.addEventListener('click', () => {
      // if(this._likes.some(this._myId)){
      //   this._heartButton.classList.toggle('places__heart-button_active');
      // }
      this.handleCardLikes();
    })
  }

  isLiked() {
    if(this._heartButton.classList.contains('places__heart-button_active')){
      return true;
    } else {
      return false;
    }
  }

  addLike() {
    this._heartButton.classList.add('places__heart-button_active');
  }

  removeLike(){
    this._heartButton.classList.remove('places__heart-button_active');
  }

  updateLikes(likeCount) {
    this._heartCount.textContent = likeCount.length;
  }

  // _handleLikeButton() {
    
  //   // const heartButton = this._element.querySelector('.places__heart-button');
  //   // When the heart button is clicked, a new class with a "liked" heart, appears
  //   const likeButton = place => {
  //     this._heartButton.classList.toggle('places__heart-button_active');
  //   };

  //   // toggles like button when clicked
  //   this._heartButton.addEventListener('click', likeButton);
  // }
  
  _showLikes() {
    this._likes.forEach((like) => {
      if(like._id === this._myId()){
        this._heartButton.classList.add('places__heart-button_active');
      }
    })
  }

  _removeDeleteButton() {
    // image popup delete button
    
      this._trashButton.style.display = "none";

  }


  generateCard() {
    // this._element = this._getTemplate();

    const placeImage = this._element.querySelector('.places__img');
    const placeName = this._element.querySelector('.places__name');
    this._trashButton = this._element.querySelector('.places__delete-button');
    
    this.placeImage = placeImage;
    this.placeName = placeName;
    
    this.placeImage.src = this._link;
    this.placeName.textContent = this._name;
    this.placeImage.alt = this.placeName.textContent;

    if(!this._isMine()) {
      this._removeDeleteButton();
    } 
   
    this._showLikes();

    this._heartCount.textContent = this._data.likes.length;
    
    this._setEventListeners();
    return this._element.firstElementChild;

  }
    
};

export default Card;