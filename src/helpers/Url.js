import Config from "../config/config";
import User from "./Identity";

/**
 * URL Helper class
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class Url {
  
  /**
   * 生成 API 访问地址
   *
   * @param router
   * @param queries
   * @returns {string}
   */
  static toRoute(router, queries = {}) {
    let qs = []
    for (let q in queries) {
      qs.push(q + "=" + queries[q])
    }
    let url = Config.url + '/' + router + '?'
    if (qs.length) {
      url += qs.join('&') + '&'
    }
    const identity = User.getIdentity();
    if (identity && !identity._isGuest && identity._accessToken) {
      url += 'accessToken=' + identity._accessToken;
    }
    
    console.info("API URL is " + url)
    
    return url
  }
  
}

export default Url;