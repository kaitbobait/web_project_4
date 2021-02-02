

/**
 * works with the API
 * All requests are methods of this Class
 */
class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._authorize = headers.authorization;
    this._contentType = headers["Content-Type"];
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._authorize
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
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._authorize
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
    fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authorize,
        "Content-Type": this._contentType
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
    fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authorize,
        "Content-Type": this._contentType
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

export default Api;