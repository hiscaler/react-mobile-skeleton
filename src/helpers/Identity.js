import Cookies from 'js-cookie';

/**
 * User passport class.
 *
 * @author hiscaler <hiscaler@gmail.com>
 */

class IdentityInterface {
  
  id = null;
  
  getId() {
    return this.id;
  }
  
}

class User extends IdentityInterface {
  
  _cookieName = "_identity"
  
  username = "";
  accessToken = "";
  
  constructor({id, username, accessToken}) {
    super()
    this.id = id;
    this.username = username;
    this.accessToken = accessToken;
  }
  
  getter(key) {
    const user = Cookies.getJSON(this._cookieName);
    if (user.hasOwnProperty(key)) {
      return user[key];
    } else {
      return null;
    }
  }
  
  getId() {
    return this.getter('id');
  }
  
  getIsGuest() {
    return this.getId() ? true : false;
  }
  
  get username() {
    return this.getter('username');
  }
  
  get accessToken() {
    return this.getter('accessToken');
  }
  
  login(cookieOptions = {expires: 7, path: ''}) {
    Cookies.set(this._cookieName, {
      id: this.id,
      username: this.username,
      accessToken: this.accessToken
    }, cookieOptions);
  }
  
  logout() {
    Cookies.remove(this._cookieName)
  }
  
}

export default User;

