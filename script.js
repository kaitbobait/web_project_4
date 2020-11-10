/*page section*/
// let pageOverlay = document.querySelector('.page_overlay');

/*profile section*/
let editButton = document.querySelector('.profile__edit'); /*edit profile button*/
let profileName = document.querySelector('.profile__name'); /*profile name */
let profileTitle = document.querySelector('.profile__title'); /*profile description */

/* form section */
let buttonClose = document.querySelector('.popup__close-button'); /*close button for the popup*/
let popup = document.querySelector('.popup'); /*popup has display: none*/
let newName = document.querySelector('.input__name'); /*name written in the name input */
let newTitle = document.querySelector('.input__title'); /*title written in the title input */
let saveButton = document.querySelector('.popup__save-button'); /* save button */

document.onload = closePopup();

/*opens popup box*/
function openPopup() {
  popup.classList.add('popup_open');
  //pageOverlay.style.display = "block";
}

/*closes popup box*/
function closePopup() {
  popup.classList.remove("popup_open");
}

/*when clicks, the popup box closes */
buttonClose.addEventListener('click', closePopup);
/*when clicks, the popup box opens */
editButton.addEventListener('click', openPopup);

/*updates the name and title input field, closes the popup, and prevents the default response from browser */
function formSubmit(evt) {
  profileName.innerText = newName.value;
  profileTitle.innerText = newTitle.value;
  closePopup();
  evt.preventDefault(); //stops browser from stubmitting the form in the default way
}

/*when click the save button, runs the formSubmit function */
saveButton.addEventListener('click', formSubmit);