import React from 'react'
import User from "../helpers/Identity"

/**
 * 组件认证处理
 *
 * @param Component
 * @returns {AuthenticatedComponent}
 * @constructor
 * @author hiscaler <hiscaler@gmail.com>
 */
function Authentication(Component) {
  // 组件有已登陆的模块 直接返回 (防止重新渲染)
  if (Component.AuthenticatedComponent) {
    return Component.AuthenticatedComponent
  }
  
  // 创建验证组件
  class AuthenticatedComponent extends React.Component {
    // static contextTypes = {
    //   router: React.PropTypes.object.isRequired,
    // }
    //
    state = {
      login: false
    }
    
    componentWillMount() {
      this.checkAuth()
    }
    
    componentWillReceiveProps(nextProps) {
      this.checkAuth()
    }
    
    checkAuth() {
      // 判断是否登录
      const identity = User.getIdentity()
      const login = identity && !identity._isGuest ? true : false
      
      // 未登录重定向到登录页面
      if (!login) {
        console.info(this.props.location)
        const location = this.props.location
        let redirectUri = location.pathname
        if (location.search) {
          redirectUri += location.search
        }
        console.info(redirectUri)
        this.props.history.push('/passport/login?redirect_uri=' + encodeURIComponent(redirectUri))
        return
      }
      
      this.setState({login})
    }
    
    render() {
      if (this.state.login) {
        return <Component {...this.props}/>
      }
      return null
    }
  }
  
  Component.AuthenticatedComponent = AuthenticatedComponent
  return Component.AuthenticatedComponent
}

export default Authentication