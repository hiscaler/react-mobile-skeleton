import React from 'react';
import {InputItem, Button} from "antd-mobile";
import User from "../helpers/Identity";

/**
 * Login Component
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class Login extends React.Component {
  
  constructor(props) {
    super(props)
    const identity = User.getIdentity()
    if (identity && !identity._isGuest) {
      this.props.history.push('/');
    }
    
    this.state = {
      username: "",
      password: ""
    }
  }
  
  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }
  
  handleLogin() {
    const {username, password} = this.state;
    let user = new User()
    user.login(username, password);
    this.props.history.push('/');
  }
  
  render() {
    return (
      <div>
        <form action="">
          <div>
            <InputItem
              clear
              placeholder="请输入登录帐号"
              onChange={value => this.handleChange("username", value)}
            >账号</InputItem>
          </div>
          <div>
            <InputItem
              type="password"
              clear
              placeholder="请输入登录密码"
              onChange={value => this.handleChange("password", value)}
            >密码</InputItem>
          </div>
          <div>
            <Button
              type="primary"
              onClick={this.handleLogin.bind(this)}
            >登录</Button>
          </div>
        </form>
      </div>
    );
  }
  
}

export default Login;