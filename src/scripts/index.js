
import Api from "./components/Api.js";
import "../page/index.css";
import 
  { settingsObject, imagesExit, placesForm, popup, newName, newTitle, addPlacesExit, addPlaceButton, editButton, profileName, profileTitle, profileExit, editAvatar, avatarClose, heartButton }
from "./utils.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Popup from './components/Popup.js'; 
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import PopupDeleteCard from "./components/PopupDeleteCard.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-8",
  headers: {
    authorization: "b69d5aa5-1ef4-42e6-80ff-c5b2987c86bb",
    "Content-Type": "application/json"
  }
});

/** 
 * create a new instance of Card
 * call imagePopup on click, which opens and popuplates the popup Image
 * template: clones the template
 * generates a card from the template
 * returns new Card element
*/
const createCard = (item) => {
  const card = new Card({
    data: item, 
    handleCardClick: (name, link) => {
      imagePopup.open(name, link)
    },
    template: "#place-template",
    isMine: () => {
      return item.owner._id === newUserInfo.getUserInfo().myId;
    },
    myId: () => {
      return newUserInfo.getUserInfo().myId;
    },
    handleDeleteCard: () => {
      deleteCardPopup._openDeletePopup();
      deleteCardPopup.setSubmitAction(() => {
        confirmDelete(item, placeElement);
      });
      
    },
    handleCardLikes: () => {
      if(!card.isLiked()){
        api.addLike(item._id)
          .then((res) => {
            // card._heartCount.textContent++;
            card.updateLikes(res.likes);
            card.addLike();
          })
      } else {
        api.removeLike(item._id)
          .then((res) => {
            // card._heartCount.textContent--;
            card.updateLikes(res.likes);
            card.removeLike();
          })
      }
    }
  });

  const placeElement = card.generateCard();
  return placeElement;
}

 const deleteCardPopup = new PopupDeleteCard('.popup__delete')

//  const deleteCardPopup = new PopupDeleteCard('.popup__delete', (item) => {
//   setSubmitAction(confirmDelete(item));
// });

  deleteCardPopup.setEventListeners();

  const confirmDelete = (item, placeElement) => {
    api.deleteCard(item._id)
      .then(() => {
        deleteCardPopup.close();
        placeElement.remove();
      })
  }

/**
 * creates an instance of PopupWithImage
 * takes in the large image class in the template
 */
const imagePopup = new PopupWithImage('.popup_image-large');
imagePopup.setEventListeners();
/**
 * Creates a new instance of UserInfo
 * Takes in the classes of the profile section that display "content"
 */
const newUserInfo = new UserInfo({nameSelector:'.profile__name', jobSelector: '.profile__title', avatarSelector: '.profile__img'});


api.getUserInfo()
  .then((res) => {
    newUserInfo.setUserInfo(res);
    newUserInfo.changeAvatar(res);
    // newUserInfo.getUserInfo();
  })
  .then((res) => {
    api.getInitialCards()
      .then((res) => {
        newSection.renderItems(res.reverse());
      })
      .catch((err) => {
        console.log(err);
      })
    })


const newSection = new Section({
  items: [],
  renderer:(item) => {
    const placeElement = createCard(item);
    newSection.addItem(placeElement);
  }
},
  ".places__list");


  
/**
 * retrieves user data
 * sets the current user data
 */
// api.getUserInfo()
//   .then((res) => {
//     newUserInfo.setUserInfo(res);
//   })

/**
 * FETCHs new values with editProfile()
 * adds new user data to profile
 */
const editProfilePopup = new PopupWithForm('.popup_edit-profile', (values) => {
  api.editProfile(values)
    .then((res) => {
      newUserInfo.setUserInfo(res);
    })
    .catch((err) => {
      console.log(err);
    })
});
editProfilePopup.setEventListeners();

/**
 * get data from addPlaces popup
 * POST data to the server
 * add data to places list on DOM
 */
const addPlacesPopup = new PopupWithForm('.popup_edit-places', (data) => {
  api.addCard(data)
    .then((res) => {
      const newCard = createCard(res);
      newSection.addItem(newCard);
      addPlacesPopup.isLoading(true);
    })
    .catch((err) => {
      console.log(err);
    })
    addPlacesPopup.isLoading(false);
})
addPlacesPopup.setEventListeners();

const editAvatarPopup = new PopupWithForm('.popup__edit-avatar', (link) => {
  api.editAvatar(link)
    .then((res) => {
      console.log(res);
      newUserInfo.changeAvatar(res);
    })
    .catch((err) => {
      console.log(err);
    })
})

editAvatar.addEventListener('click', () => {
  editAvatarPopup.open();
})
editAvatarPopup.setEventListeners();


// when clicks, the edit popup box opens
editButton.addEventListener('click', () => {
  const info = newUserInfo.getUserInfo();
  console.log(info);
  newName.value = info.name;
  newTitle.value = info.job;
  // newName.value = profileName.textContent;
  // newTitle.value = profileTitle.textContent;

  editProfilePopup.open();
  
});
// when clicks, the edit popup box closes
profileExit.addEventListener('click', () => {
  editProfilePopup.close();
});
// when clicks, the popup box opens 
addPlaceButton.addEventListener('click', () => {
  addPlacesPopup.open();
  resetForm(placesForm);
  
});
// when clicks, the add places popup box closes
addPlacesExit.addEventListener('click', () => {
  addPlacesPopup.close();
});

// on click of close button, the popup image will disappear
imagesExit.addEventListener('click', () => {
  imagePopup.close();
});

avatarClose.addEventListener('click', () => {
  editAvatarPopup.close();
})

// reset form, may delete, created in PopupWithForm class
const resetForm = (form) => {
  form.reset();
}

/**
 * creates an array of new forms
 * for each form, an instance of FormValidator is created
 * calls function to begin validation
 */
const renderFormValidation = () => {

  const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));
  formList.forEach((formElement) => {
    const formValidator = new FormValidator(settingsObject, formElement);
    formValidator.enableValidation(settingsObject);
  });
};

renderFormValidation();

