import Cookies from 'js-cookie';

/**
 * User passport class.
 *
 * @author hiscaler <hiscaler@gmail.com>
 */

class IdentityInterface {
  
  static _cookieName = "_identity"
  
  
  constructor() {
    this._isGuest = true;
    this._id = 0;
    this._username = null;
    this._accessToken = null;
  }
  
  set isGuest(v) {
    this._isGuest = !!v;
  }
  
  get isGuest() {
    return this._isGuest;
  }
  
  set id(id) {
    this._id = id;
  }
  
  get id() {
    return this._id;
  }
  
  set username(username) {
    this._username = username;
  }
  
  get username() {
    return this._username;
  }
  
  set accessToken(token) {
    this._accessToken = token;
  }
  
  get accessToken() {
    return this._accessToken;
  }
  
}

class Identity extends IdentityInterface {

}

class User {
  
  constructor() {
    this._id = 0
    this._username = null;
    this._password = null;
    this._accessToken = null;
  }
  
  set id(id) {
    this._id = id;
  }
  
  get id() {
    return this._id
  }
  
  set username(username) {
    this._username = username;
  }
  
  get username() {
    return this._username;
  }
  
  set password(password) {
    this._password = password
  }
  
  set accessToken(accessToken) {
    this._accessToken = accessToken;
  }
  
  get accessToken() {
    return this._accessToken;
  }
  
  getIsGuest() {
    return !!this.id;
  }
  
  static getIdentity() {
    return Cookies.getJSON(Identity._cookieName);
  }
  
  login(username, password, cookieOptions = {expires: 7, path: ''}) {
    // @todo 实现接口登录处理
    this.id = 1;
    this.username = username;
    this.accessToken = "";
    let identity = new Identity();
    identity.isGuest = false;
    identity.id = this.id
    identity.username = this.username;
    identity.accessToken = this.accessToken;
    Cookies.set(Identity._cookieName, identity);
    return identity
  }
  
  logout() {
    Cookies.remove(Identity._cookieName)
  }
  
}

export default User;

