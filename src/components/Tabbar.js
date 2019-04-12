import React from "react";
import "./Tabbar.css"

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
  
  render() {
    return (
      <div id="tabbar" className="am-tabs-tab-bar-wrap">
        <div className="am-tab-bar-bar">
          {this.state.buttons.map(button => <a data-seed="logId" className="am-tab-bar-tab" href={button.url} key={button.url}>
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

export default Tabbar;