

/**
 * works with the API
 * All requests are methods of this Class
 */
class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around.nomoreparties.co/v1/group-8/cards", {
      method: "GET",
      headers: {
        authorization: "b69d5aa5-1ef4-42e6-80ff-c5b2987c86bb"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // if server returns an error, reject the promise
        return Promise.reject(`Error: ${res.status}`);
      })
      // if there is an error, log it
      .catch(err => {
        console.log(err);
      });
  }

  // GETs information for the user profile
  getUserInfo() {
    return fetch("https://around.nomoreparties.co/v1/group-8/users/me", {
      method: "GET",
      headers: {
        authorization: "b69d5aa5-1ef4-42e6-80ff-c5b2987c86bb"
      }
    })
      .then((res) => {
        if(res.ok){
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // modified the profile text content
  editProfile() {
    fetch("https://around.nomoreparties.co/v1/group-8/users/me", {
      method: "PATCH",
      headers: {
        authorization: "b69d5aa5-1ef4-42e6-80ff-c5b2987c86bb",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Marie Skłodowska Curie",
        about: "Physicist and Chemist"
      })
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });  
  }

  addCard() {
    fetch("https://around.nomoreparties.co/v1/group-8/cards", {
      method: "POST",
      headers: {
        authorization: "b69d5aa5-1ef4-42e6-80ff-c5b2987c86bb",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "//name of created card",
        link: "//link to card image",
      })
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // showLikes() {

  // }
  
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-8",
  headers: {
    authorization: "b69d5aa5-1ef4-42e6-80ff-c5b2987c86bb",
    "Content-Type": "application/json"
  }
});