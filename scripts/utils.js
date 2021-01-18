
const settingsObject = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButton: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input-error",
  inputBorderError: "popup__input-error_color"
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


const closePopupWithEsc = (evt) => {
  const popup = document.querySelector(".popup_open");
  if (evt.key === "Escape") {
    if(popup) {
      closePopup(popup);
    };
  } 
};

const closePopupFromOverlay = () => {
  const popupList = Array.from(document.querySelectorAll(".popup"));
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup_open')) {
        closePopup(evt.target);
      }
    });
  });
};

/* passes in a popup through the event listener to open the popup */
const openPopup = (popup) => {
  popup.classList.add('popup_open');
  // adds listener for ESC button
  document.addEventListener("keydown", closePopupWithEsc);
};

/*closes either popup box if one is open*/
const closePopup = (popup) => {
  popup.classList.remove("popup_open");
  // removes listener for ESC button
  document.removeEventListener("keydown", closePopupWithEsc);
};



export { initialPlaces, settingsObject, openPopup, closePopup, closePopupWithEsc, closePopupFromOverlay};