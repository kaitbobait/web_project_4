
/*profile section*/
let editButton = document.querySelector('.profile__edit'); /*edit profile button*/
let profileName = document.querySelector('.profile__name'); /*profile name */
let profileTitle = document.querySelector('.profile__title'); /*profile description */

/* form section */
let form = document.querySelector('.popup__form');
let buttonClose = document.querySelector('.popup__close-button'); /*close button for the popup*/
let popup = document.querySelector('.popup'); /*popup has display: none*/
let newName = document.querySelector('.popup__input_text_name'); /*name written in the name input */
let newTitle = document.querySelector('.popup__input_text_title'); /*title written in the title input */
let saveButton = document.querySelector('.popup__save-button'); /* save button */

/*card section*/


//add content to card template

function addPlace(place) {
  let placesList = document.querySelector('.places__list');
  let placeTemplate = document.querySelector('#place-template').content;

  //clone content of template tag for places
  let placeElement = placeTemplate.cloneNode(true);
  let placeImage = placeElement.querySelector('.places__img');
  let placeName = placeElement.querySelector('.places__name');

   /* like button */
  const heartButton = placeElement.querySelector('.places__heart-button');

  placeImage.src = place.link;
  placeName.textContent = place.name;

  //make cards appear online
  placesList.append(placeElement);

 
  
  
  heartButton.addEventListener('click', function(place) {
    
      heartButton.classList.add('places__heart-button_active');
      console.log(place.target);
    
  })

};



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


initialPlaces.forEach((place) => {

  addPlace(place);

});

  /* like button */

// const heartButton = document.querySelector('.places__heart-button');
//  heartButton.addEventListener('click', function(place) {
//   heartButton.classList.add('places__heart-button_active');
//   console.log(place.target);
// })

/*opens popup box*/
function openPopup() {
  popup.classList.add('popup_open');
  newName.value = profileName.textContent;
  newTitle.value = profileTitle.textContent;
  console.log(openpopup);
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
  profileName.textContent = newName.value;
  profileTitle.textContent = newTitle.value;
  closePopup();
  evt.preventDefault(); //stops browser from submitting the form in the default way (refreshes whenever you submit)
}

/*when click the save button, runs the formSubmit function */
form.addEventListener('submit', formSubmit);


