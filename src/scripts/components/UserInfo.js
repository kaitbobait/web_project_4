

// renders information about the User on the page
class UserInfo {
  constructor({nameSelector, jobSelector}) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    // this._avatar = document.querySelector(avatarSelector);
  }

  // returns an object with information that is currently displayed
  getUserInfo() {
    const name = this._name.textContent;
    const job = this._job.textContent;
    const getInfo = {name, job};
    return getInfo;
  }

  // takes user info and adds it to the page
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.about;
  }
}

export default UserInfo;