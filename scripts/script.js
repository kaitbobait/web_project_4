
/*profile section*/
let editButton = document.querySelector('.profile__edit'); /*edit profile button*/
let profileName = document.querySelector('.profile__name'); /*profile name */
let profileTitle = document.querySelector('.profile__title'); /*profile description */

/* add card */
let addPlaceButton = document.querySelector('.profile__add');
let popupAdd = document.querySelector('.popup_add'); 
//same close button but had to target this one specifically to get to close
// let closeButton = document.querySelector('.popup__close-button_add'); 
let imageTitle = document.querySelector('.popup__input_text_image-title');
let imageLink = document.querySelector('.popup__input_text_image');


/* form section */
let form = document.querySelector('.popup__form');
let buttonClose = document.querySelectorAll('.popup__close-button'); /*close button for the popup*/
buttonCloseArray = Array.from(buttonClose);
let popup = document.querySelector('.popup'); /*popup has display: none*/
let newName = document.querySelector('.popup__input_text_name'); /*name written in the name input */
let newTitle = document.querySelector('.popup__input_text_title'); /*title written in the title input */
let saveButton = document.querySelector('.popup__save-button'); /* save button */

/* EDIT PROFILE FORM */

/*opens popup box*/
function openPopupEdit() {
  popup.classList.add('popup_open');
  newName.value = newName.textContent;
  newTitle.value = newTitle.textContent;
}

/*closes popup box*/
function closePopup() {
  popup.classList.remove("popup_open");
}

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
form.addEventListener('submit', formSubmitEdit);

/* PLACE CARD SECTION */

/* Adds the 6 cards on load */
function addPlace(place) {
  let placesList = document.querySelector('.places__list');
  let placeTemplate = document.querySelector('#place-template').content;

  // //clone content of template tag for places
  let placeElement = placeTemplate.cloneNode(true);
  let placeImage = placeElement.querySelector('.places__img');
  let placeName = placeElement.querySelector('.places__name');

   /* like button */
  const heartButton = placeElement.querySelector('.places__heart-button');

 
  placeImage.src = place.link;
  placeName.textContent = place.name;


  //make cards appear online
  placesList.append(placeElement);

  /* When the heart button is clicked, a new class with a "liked" heart, appears */
  heartButton.addEventListener('click', function(place) {
    
      heartButton.classList.add('places__heart-button_active');
      console.log(place.target);
    
  })
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

/* delete place card */

 /* removes the selected place */
//  function deletePlace() {
//     /* delete button */
//   const deleteButton = document.querySelector('places__delete-button');
//   const placeItem = document.querySelector('.places__item');
//   placeItem.remove();
//  }

//  deleteButton.addEventListener('click', deletePlace);



/* ADD PLACE FORM */
// inputFieldOne.placeholder.textContent = 'Title';
// inputFieldTwo.placeholder.textContent = 'Image link';

/* opens the Add card popup */
function openPopupAdd() {
  //selects the add place popup
  popupAdd.classList.add('popup_open');

};

//closes the Add card popup
function closePopupAdd() {
  popupAdd.classList.remove("popup_open");
};

/*when clicks, the popup box opens */
addPlaceButton.addEventListener('click', openPopupAdd);

/*when clicks, the popup box closes */
buttonCloseArray[1].addEventListener('click', closePopupAdd);



/* Image pops up */

