

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
      headers: {
        authorization: this._authorize
        
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
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._authorize
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
  editProfile(values) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authorize,
        "Content-Type": this._contentType
      },
      body: JSON.stringify({
        name: values.name,
        about: values.about
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

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authorize,
        "Content-Type": this._contentType
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
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

  showLikes() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        authorization: this._authorize
        
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

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorize,
        "Content-Type": this._contentType
      }
    })
    .then(res => {
      if (res.ok) {
        // return res.json();
        return res;
      }
      // if server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`);
    })
    // if there is an error, log it
    .catch(err => {
      console.log(err);
    });
  }
  
}

export default Api;