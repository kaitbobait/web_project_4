
/*profile section*/
const editButton = document.querySelector('.profile__edit'); //edit profile button
const popupEditProfile = document.querySelector('.popup_edit-profile'); //edit profile popup
let profileName = document.querySelector('.profile__name'); //profile name
let profileTitle = document.querySelector('.profile__title'); //profile description
const profileExit = document.querySelector('.popup__close-button_profile'); //close button

/* add card */
const addPlaceButton = document.querySelector('.profile__add'); //add button
const placesList = document.querySelector('.places__list'); //list of places
const popupEditPlaces = document.querySelector('.popup_edit-places'); //popup for add place form
const imageTitle = document.querySelector('.popup__input_text_image-title'); //input field for title
const imageLink = document.querySelector('.popup__input_text_image'); //input field for image link
const addPlacesExit = document.querySelector('.popup__close-button_places'); //close button

/* form section */
const popupForms = document.querySelectorAll('.popup__form');
formArray = Array.from(popupForms);
const popup = document.querySelector('.popup'); /*popup has display: none*/
let newName = document.querySelector('.popup__input_text_name'); /*name written in the name input */
let newTitle = document.querySelector('.popup__input_text_title'); /*title written in the title input */
const saveButton = document.querySelectorAll('.popup__save-button'); /* save button */

/* places image popup */
const popupImageLarge = document.querySelector('.popup_image-large');
const popupPhoto = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__image-title');
const imagesExit = document.querySelector('.popup__close-button_images');

/* determines which popup to open */
const openPopup = (evt) => {
  if (evt.target === editButton) {
    popupEditProfile.classList.add('popup_open');
    newName.value = newName.textContent;
    newTitle.value = newTitle.textContent;
  } else if (evt.target === addPlaceButton) {
    popupEditPlaces.classList.add('popup_open');
  }
};

/*closes either popup box if one is open*/
const closePopup = () => {
  if (popupEditProfile.classList.contains('popup_open')) {
    popupEditProfile.classList.remove("popup_open");
  } else if (popupEditPlaces.classList.contains('popup_open')) {
    popupEditPlaces.classList.remove("popup_open");
  } else if (popupImageLarge.classList.contains('popup_open_image')) {
    popupImageLarge.classList.remove("popup_open_image");
  }
};

// when clicks, the edit popup box opens
editButton.addEventListener('click', openPopup);
// when clicks, the edit popup box closes
profileExit.addEventListener('click', closePopup);
// when clicks, the popup box opens 
addPlaceButton.addEventListener('click', openPopup);
// when clicks, the add places popup box closes
addPlacesExit.addEventListener('click', closePopup);
// on click of close button, the popup image will disappear
imagesExit.addEventListener('click', closePopup);


/* PLACE CARD SECTION */

// creates and returns a template for the place cards
const createPlaceTemplate = (place) =>  {
  // place card template
  const placeTemplate = document.querySelector('#place-template').content;
  // clone content of place card template tag
  const placeElement = placeTemplate.cloneNode(true);
  let placeImage = placeElement.querySelector('.places__img');
  let placeName = placeElement.querySelector('.places__name');

  // using the text from the place card form fields, to create a new place card
  placeImage.src = place.link;
  placeImage.alt = place.name;
  placeName.textContent = place.name;

  // like button
  const heartButton = placeElement.querySelector('.places__heart-button');
  // When the heart button is clicked, a new class with a "liked" heart, appears
  const likeButton = place => {
    heartButton.classList.toggle('places__heart-button_active');
  };
  // toggles like button when clicked
  heartButton.addEventListener('click', likeButton); 

  // image popup delete button
  const deleteButton = placeElement.querySelector('.places__delete-button');

  // removes the selected place card 
  const deletePlace = (evt) => {
    evt.target.closest('.places__item').remove();
  };

  // deletes place card on click of delete button
  deleteButton.addEventListener('click', deletePlace);

  const picturePopup = () => {
    popupImageLarge.classList.add('popup_open_image');
    popupPhoto.src = placeImage.src;
    popupTitle.textContent = placeName.textContent;
  };
  //on click on an image in the place cards, a popup of the image will appear
  placeImage.addEventListener('click', picturePopup);

  return placeElement;
};

// accesses the place card template and places it in the DOM
const addPlace = (place) => {
  const placeElement = createPlaceTemplate(place);
   
  //make cards appear online
  placesList.prepend(placeElement); 
};

/* loops through the initialPlaces array to load each place card with the addPlace function */
initialPlaces.forEach((place) => {
  addPlace(place);
});

 /*updates the name and title input field, closes the popup, and prevents the default response from browser */
const formSubmitEdit = (evt) => {
  evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
  profileName.textContent = newName.value;
  profileTitle.textContent = newTitle.value;
  closePopup();
}

//updates the title and image, closes the popup, and prevents the default response from browser
const formSubmitAdd = (evt) => {
  evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
  const place = {
    name: imageTitle.value,
    link: imageLink.value
  }
  addPlace(place);
  closePopup();
}

/*when click the save button, runs the formSubmit function */
popupForms[0].addEventListener('submit', formSubmitEdit);
/*when click the save button, runs the formSubmit function */
popupForms[1].addEventListener('submit', formSubmitAdd);


