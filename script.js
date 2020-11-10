
/*profile section*/
let editButton = document.querySelector('.profile__edit'); /*edit profile button*/
let profileName = document.querySelector('.profile__name'); /*profile name */
let profileTitle = document.querySelector('.profile__title'); /*profile description */

let buttonClose = document.querySelector('.popup__close-button'); /*close button for the popup*/
let popupOpen = document.querySelector('.popup_open'); /*popup is visable*/
let popupClose = document.querySelector('.popup'); /*popup has display: none*/
let newName = document.querySelector('.input__name'); /*name written in the name input */
let newTitle = document.querySelector('.input__title'); /*title written in the title input */
let saveButton = document.querySelector('.popup__save-button'); /* save button */

document.onload = closePopup();

/*closes popup box*/
function closePopup() {
  popupOpen.classList.remove("popup_open");
  popupClose.classList.add("popup");
}

/*opens popup box*/
function openPopup() {
  popupOpen.classList.add('popup_open');
  popupClose.classList.remove('popupClose');
}

/*when clicks, the popup box closes */
buttonClose.addEventListener('click', closePopup);
/*when clicks, the popup box opens */
editButton.addEventListener('click', openPopup);

function updateName() {
  profileName.innerText = newName.value;
}

function updateTitle() {
  profileTitle.innerText = newTitle.value;
}

function updateInfo() {
  updateName();
  updateTitle();
  closePopup();
}

saveButton.addEventListener('click', updateInfo);