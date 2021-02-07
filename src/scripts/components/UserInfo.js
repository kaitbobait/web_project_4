

// renders information about the User on the page
class UserInfo {
  constructor({nameSelector, jobSelector, avatarSelector}) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  // returns an object with information that is currently displayed

  getUserInfo() {
    const name = this._name.textContent;
    const job = this._job.textContent;
    const getInfo = {name, job, myId: this.myId};
    return getInfo;
  }

  // takes user info and adds it to the page
  setUserInfo(data) {
    console.log(data);
    this._name.textContent = data.name;
    this._job.textContent = data.about;
    this.myId = data._id;
    
  }

  changeAvatar(data) {
    this._avatar.style.backgroundImage = `url(${data.avatar})`;
  }
}

export default UserInfo;