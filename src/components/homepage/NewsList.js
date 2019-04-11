import React from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'
import {Toast} from "antd-mobile";

/**
 * News list
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class NewsList extends React.Component {
  
  static defaultProps = {
    title: "",
    moreUrl: "",
    className: "widget-news-list"
  }
  
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      items: []
    }
  }
  
  componentDidMount() {
    const url = 'https://api.apdnews.com/news/list?attribute=v&lang=zh-cn&limit=10&accessToken=FF78F2D3-C2A5-2875-0EE2-EB6803A67639'
    axios.get(url).then((resp) => {
      console.info(resp)
      this.setState({
        isLoading: false,
        items: resp.data.data.items
      })
    })
  }
  
  render() {
    const {title, moreUrl, className} = this.props
    const {isLoading, items} = this.state
    if (isLoading) {
      Toast.loading("载入中...", 3, null, false);
      return null;
    } else {
      return (
        <div className={className}>
          <div className="hd">
            {title}
          </div>
          <div className="bd">
            <ul>
              {items.map(item => <li key={item.id}>
                <a to={'/news-view' + item.id} title={item.title}>{item.title}</a>
              </li>)}
            </ul>
          </div>
        </div>
      );
    }
    
  }
}

export default NewsList;