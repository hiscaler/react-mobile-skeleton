import React from "react";
import "./Tabbar.css"
import {withRouter} from 'react-router-dom';

class Tabbar extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      buttons: [
        {
          label: "首页",
          url: "/",
          icon: "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
          badge: undefined,
          active: false
        },
        {
          label: "资讯中心",
          url: "/news",
          icon: "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
          badge: undefined,
          active: false
        },
        {
          label: "订单中心",
          url: "/orders",
          icon: "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
          badge: undefined,
          active: false
        },
        {
          label: "我的",
          url: "/my",
          icon: "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
          badge: 1,
          active: false
        }
      ]
    }
  }
  
  componentWillMount() {
    const pathname = this.props.location.pathname
    let buttons = this.state.buttons
    for (let i in buttons) {
      let url = buttons[i].url, len = url.length
      if (pathname === url || (len > 1 && pathname.substr(0, len) === url)) {
        buttons[i].active = true
      }
    }
    this.setState({buttons: buttons})
  }
  
  render() {
    return (
      <div id="tabbar" className="am-tabs-tab-bar-wrap">
        <div className="am-tab-bar-bar">
          {this.state.buttons.map(button => <a className={"am-tab-bar-tab" + (button.active ? " tabbar-active" : "")}
                                               href={button.url}
                                               key={button.url}>
            <div className="am-tab-bar-tab-icon">
              <span className={button.badge && "am-badge am-tab-bar-tab-badge tab-badge"}>
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: "url(" + button.icon + ") center center / 21px 21px no-repeat"
                  }}>
                </div>
                {button.badge && <sup className="am-badge-text">1</sup>}
              </span>
            </div>
            <p className="am-tab-bar-tab-title">{button.label}</p>
          </a>)}
        </div>
      </div>
    );
  }
  
}

// export default Tabbar;
export default withRouter(Tabbar)