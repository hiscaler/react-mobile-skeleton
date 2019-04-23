import React from "react";
import "./Tabbar.css"
import {withRouter, Link} from 'react-router-dom';
import homepageIcon from "../assets/images/tabbar-homepage.png";
import homepageActiveIcon from "../assets/images/tabbar-homepage-active.png";
import newsIcon from "../assets/images/tabbar-news.png";
import newsActiveIcon from "../assets/images/tabbar-news-active.png";
import statisticIcon from "../assets/images/tabbar-statistics.png";
import statisticActiveIcon from "../assets/images/tabbar-statistics-active.png";
import myIcon from "../assets/images/tabbar-my.png";
import myActiveIcon from "../assets/images/tabbar-my-active.png";

/**
 * Tabbar
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class Tabbar extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      buttons: [
        {
          label: "首页",
          url: "/",
          icons: {
            default: homepageIcon,
            active: homepageActiveIcon
          },
          icon: homepageIcon,
          badge: undefined,
          active: false
        },
        {
          label: "资讯中心",
          url: "/news",
          icons: {
            default: newsIcon,
            active: newsActiveIcon
          },
          icon: newsIcon,
          badge: undefined,
          active: false
        },
        {
          label: "订单中心",
          url: "/orders",
          icons: {
            default: statisticIcon,
            active: statisticActiveIcon
          },
          icon: statisticIcon,
          badge: undefined,
          active: false
        },
        {
          label: "我的",
          url: "/my",
          icons: {
            default: myIcon,
            active: myActiveIcon
          },
          icon: myIcon,
          badge: 1,
          active: false
        }
      ]
    }
  }
  
  componentWillMount() {
    const pathname = this.props.location.pathname;
    let buttons = this.state.buttons;
    for (let i in buttons) {
      let url = buttons[i].url, len = url.length
      if (pathname === url || (len > 1 && pathname.substr(0, len) === url)) {
        buttons[i].active = true;
        buttons[i].icon = buttons[i].icons.active;
      }
    }
    this.setState({buttons: buttons});
  }
  
  render() {
    return (
      <div id="tabbar" className="am-tabs-tab-bar-wrap">
        <div className="am-tab-bar-bar">
          {this.state.buttons.map(button =>
            <Link className={"am-tab-bar-tab" + (button.active ? " tabbar-active" : "")}
                  to={button.url}
                  key={button.url}
            >
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
            </Link>
          )}
        </div>
      </div>
    );
  }
  
}

// export default Tabbar;
export default withRouter(Tabbar)