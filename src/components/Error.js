import React from "react";
import {Result} from "antd-mobile";
import "./Error.css";
import iconInformation from "../assets/images/icon-information.svg";

const myImg = src => <img src={src} className="am-icon am-icon-md" alt=""/>;

/**
 * Error component
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class Error extends React.Component {
  
  static defaultProps = {
    type: "information",
    title: "提示信息",
    message: ""
  }
  
  render() {
    return (
      <div className="widget-error">
        <Result
          img={myImg(iconInformation)}
          title={this.props.title}
          message={this.props.message}
          buttonText="返回首页"
          buttonType="primary"
          onButtonClick={
            this.props.history.push('/')
          }
        />
      </div>
    )
  }
}

export default Error