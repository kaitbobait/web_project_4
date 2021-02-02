
const settingsObject = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButton: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input-error",
  inputBorderError: "popup__input-error_color"
};


// const initialPlaces = [
//   {
//     name: "Yosemite Valley",
//     link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
//   },
//   {
//     name: "Lake Louise",
//     link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
//   },
//   {
//     name: "Bald Mountains",
//     link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
//   },
//   {
//     name: "Latemar",
//     link: "https://code.s3.yandex.net/web-code/latemar.jpg"
//   },
//   {
//     name: "Vanoise National Park",
//     link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://code.s3.yandex.net/web-code/lago.jpg"
//   }
// ]; 

const imagesExit = document.querySelector('.popup__close-button_images');
const placesForm = document.querySelector('.popup__form-places');
const popup = document.querySelector('.popup'); /*popup has display: none*/
const newName = document.querySelector('.popup__input_text_name'); /*name written in the name input */
const newTitle = document.querySelector('.popup__input_text_title'); /*title written in the title input */
const addPlacesExit = document.querySelector('.popup__close-button_places'); //close button
const addPlaceButton = document.querySelector('.profile__add'); //add button

/*profile section*/
const editButton = document.querySelector('.profile__edit'); //edit profile button
const profileName = document.querySelector('.profile__name'); //profile name
const profileTitle = document.querySelector('.profile__title'); //profile description
const profileExit = document.querySelector('.popup__close-button_profile'); //close button

// const closePopupFromOverlay = () => {
//   const popupList = Array.from(document.querySelectorAll(".popup"));
//   popupList.forEach((popupElement) => {
//     popupElement.addEventListener('click', (evt) => {
//       if(evt.target.classList.contains('popup_open')) {
//         closePopup(evt.target);
//       }
//     });
//   });
// };


export { settingsObject, imagesExit, placesForm, popup, newName, newTitle, addPlacesExit, addPlaceButton, editButton, profileName, profileTitle, profileExit };