
/*profile section*/
const editButton = document.querySelector('.profile__edit'); /*edit profile button*/
let profileName = document.querySelector('.profile__name'); /*profile name */
let profileTitle = document.querySelector('.profile__title'); /*profile description */

/* add card */
const addPlaceButton = document.querySelector('.profile__add');
let imageTitle = document.querySelector('.popup__input_text_image-title');
let imageLink = document.querySelector('.popup__input_text_image');

/* form section */
const form = document.querySelectorAll('.popup__form');
formArray = Array.from(form);
const buttonClose = document.querySelectorAll('.popup__close-button'); /*close button for the popup*/
buttonCloseArray = Array.from(buttonClose);
const popup = document.querySelectorAll('.popup'); /*popup has display: none*/
popupArray = Array.from(popup);
let newName = document.querySelector('.popup__input_text_name'); /*name written in the name input */
let newTitle = document.querySelector('.popup__input_text_title'); /*title written in the title input */
const saveButton = document.querySelectorAll('.popup__save-button'); /* save button */

/* places image popup */
const popupPhoto = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__image-title');



/* EDIT PROFILE FORM */

/*opens popup box*/
// function openPopupEdit() {
//   popup.classList.add('popup_open');
//   newName.value = newName.textContent;
//   newTitle.value = newTitle.textContent;
// }
function openPopupEdit() {
  popupArray[0].classList.add('popup_open');
  newName.value = newName.textContent;
  newTitle.value = newTitle.textContent;
}

/*closes either popup box if one is open*/
function closePopup() {
  if (popupArray[0].classList.contains('popup_open')) {
    popupArray[0].classList.remove("popup_open");
  } if (popupArray[1].classList.contains('popup_open')) {
    popupArray[1].classList.remove("popup_open");
  } if (popupArray[2].classList.contains('popup_open_image')) {
    popupArray[2].classList.remove("popup_open_image");
  }
};

/*when clicks, the popup box closes */
buttonCloseArray[0].addEventListener('click', closePopup);
/*when clicks, the popup box opens */
editButton.addEventListener('click', openPopupEdit);

/*updates the name and title input field, closes the popup, and prevents the default response from browser */
function formSubmitEdit(evt) {
  profileName.textContent = newName.value;
  profileTitle.textContent = newTitle.value;
  closePopup();
  evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
}

/*when click the save button, runs the formSubmit function */
form[0].addEventListener('submit', formSubmitEdit);

/* PLACE CARD SECTION */

/* Adds the 6 cards on load */
function addPlace(place) {
  const placesList = document.querySelector('.places__list');
  const placeTemplate = document.querySelector('#place-template').content;

  // clone content of template tag for places
  const placeElement = placeTemplate.cloneNode(true);
  let placeImage = placeElement.querySelector('.places__img');
  let placeName = placeElement.querySelector('.places__name');
  const placeContainer = placeElement.querySelector('.place__container');

   /* like button */
  const heartButton = placeElement.querySelector('.places__heart-button');

  placeImage.src = place.link;
  placeImage.alt = place.name;
  placeName.textContent = place.name;


/* When the heart button is clicked, a new class with a "liked" heart, appears */
  heartButton.addEventListener('click', function(place) {
      heartButton.classList.toggle('places__heart-button_active');
      console.log(place.target);
  });

  /* new card popup */
  //opens a larger image popup of the place card image
  //opens the popup, but doesn't render picture yet.
  function picturePopup () {
    popupArray[2].classList.add('popup_open_image');
    popupPhoto.src = placeImage.src;
    popupTitle.textContent = placeName.textContent;
    
  };
  //on click on an image in the place cards, a popup of the image will appear
  placeImage.addEventListener('click', picturePopup);

  //on click of close button, the popup will disappear
  buttonCloseArray[2].addEventListener('click', closePopup);

  const deleteButton = placeElement.querySelector('.places__delete-button');
  deleteButton.addEventListener('click', deletePlace);

  //make cards appear online
  placesList.prepend(placeElement);
   
};

/* 6 place cards to load initially */
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

/* loops through the initialPlaces array to load each place card with the addPlace function */
initialPlaces.forEach((place) => {
  addPlace(place);

});

//updates the title and image, closes the popup, and prevents the default response from browser
function formSubmitAdd(evt) {
  evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
  const place = {
    name: imageTitle.value,
    link: imageLink.value
  }
  addPlace(place);
  closePopup();

}

/*when click the save button, runs the formSubmit function */
form[1].addEventListener('submit', formSubmitAdd);

/* Delete place card */

/* removes the selected place */
 function deletePlace(evt) {
  evt.target.closest('.places__item').remove();
 };



/* ADD PLACE FORM */

/* opens the Add card popup */
function openPopupAdd() {
  //selects the add place popup
  popupArray[1].classList.add('popup_open');

};

/*when clicks, the popup box opens */
addPlaceButton.addEventListener('click', openPopupAdd);

/*when clicks, the popup box closes */
buttonCloseArray[1].addEventListener('click', closePopup);
