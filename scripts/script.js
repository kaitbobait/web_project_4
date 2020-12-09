
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

/* places image popup */
const popupImageLarge = document.querySelector('.popup_image-large');
const popupPhoto = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__image-title');
const imagesExit = document.querySelector('.popup__close-button_images');

/* passes in a popup through the event listener to open the popup */
const openPopup = (popup) => {
    popup.classList.add('popup_open');
};

/*closes either popup box if one is open*/
const closePopup = (popup) => {
    popup.classList.remove("popup_open");
};

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
});
// when clicks, the add places popup box closes
addPlacesExit.addEventListener('click', () => {
  closePopup(popupEditPlaces);
});

// on click of close button, the popup image will disappear
imagesExit.addEventListener('click', () => {
  closePopup(popupImageLarge);

});

// placeImage.addEventListener('click', () => {
//   popupImageLarge.classList.add('popup_open_image');
//   popupPhoto.src = placeImage.src;
//   openPopup(popupImageLarge);
//   popupTitle.textContent = placeName.textContent;
// });

/* PLACE CARD SECTION */

// creates and returns a template for the place cards
const createPlaceTemplate = (place) =>  {
  // place card template
  const placeTemplate = document.querySelector('#place-template').content;
  // clone content of place card template tag
  const placeElement = placeTemplate.cloneNode(true);
  const placeImage = placeElement.querySelector('.places__img');
  const placeName = placeElement.querySelector('.places__name');

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

  // on click on an image in the place cards, a popup of the image will appear
  placeImage.addEventListener('click', () => {
    popupPhoto.src = placeImage.src;
    popupTitle.textContent = placeName.textContent;
    openPopup(popupImageLarge);
  });
  
  return placeElement;
};

// accesses the place card template and places it in the DOM
const addPlace = (place) => {
  const placeElement = createPlaceTemplate(place);
   
  //make cards appear online
  placesList.prepend(placeElement); 
};

const onload = (place) => {
  addPlace(place);
};

/* loops through the initialPlaces array to load each place card with the addPlace function */
initialPlaces.forEach(onload);

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
  addPlace(place);
  closePopup(popupEditPlaces);
});

/* Form Validation */
