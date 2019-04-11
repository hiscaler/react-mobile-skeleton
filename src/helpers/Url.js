import Config from "../config/config";

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
    url += 'accessToken=' + Config.accessToken
    
    return url
  }
  
}

export default Url;