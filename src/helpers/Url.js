import Config from "../config/config"
import User from "./Identity"

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
   * @param params
   * @returns {string}
   */
  static toRoute(router, params = {}) {
    let qs = []
    for (let q in params) {
      qs.push(q + "=" + params[q])
    }
    let url = Config.url.trim()
    if (url[url.length] !== '/') {
      url += '/'
    }
    router = router.trim()
    if (router.length) {
      router = router.replace('\\', '//')
      if (router.startsWith('/')) {
        router = router.substring(1)
      }
      if (router.endsWith('/')) {
        router = router.substring(0, router.length - 1)
      }
      url += router
    }
    url += url.indexOf('?') === -1 ? '?' : '&'
    if (qs.length) {
      url += qs.join('&')
    }
    const identity = User.getIdentity();
    if (identity && !identity._isGuest && identity._accessToken) {
      url += '&accessToken=' + identity._accessToken;
    }
    
    return url
  }
  
}

export default Url