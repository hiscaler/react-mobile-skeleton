import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Toast, WingBlank} from "antd-mobile"
import Url from "../../helpers/Url"

/**
 * News index
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class NewsIndex extends React.Component {
  
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
  
  componentWillMount() {
    Toast.loading("载入中...", 0, null, false)
    const url = Url.toRoute('news/list', {
      limit: 10
    })
    axios.get(url).then((resp) => {
      this.setState({
        isLoading: false,
        items: resp.data.data.items
      })
    })
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    Toast.hide()
  }
  
  render() {
    const {title, className} = this.props, {isLoading, items} = this.state
    if (isLoading) {
      return null
    } else {
      return (
        <WingBlank size="md">
          <div className={className}>
            <div className="hd">
              {title}
            </div>
            <div className="bd">
              <ul className="list">
                {items.map(item => <li key={item.id}>
                  <Link to={'/news/' + item.id} title={item.title}>{item.title}</Link>
                </li>)}
              </ul>
            </div>
          </div>
        </WingBlank>
      )
    }
    
  }
}

export default NewsIndex