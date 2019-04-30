import {Result} from "antd-mobile"
import iconInformation from "../assets/images/icon-information.svg"
import React from "react"

const myImg = src => <img src={src} className="am-icon am-icon-md" alt=""/>

/**
 * NotFound component
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class NotFound extends React.Component {
  render() {
    return (
      <div className="widget-error">
        <Result
          img={myImg(iconInformation)}
          title="提示信息"
          message="您访问的资源不存在。"
          buttonText="返回首页"
          buttonType="primary"
          onButtonClick={
            function () {
              window.location.href = "/"
            }
          }
        />
      </div>
    )
  }
}

export default NotFound