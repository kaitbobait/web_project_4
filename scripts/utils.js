
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



export { openPopup, closePopup, closePopupWithEsc, closePopupFromOverlay};