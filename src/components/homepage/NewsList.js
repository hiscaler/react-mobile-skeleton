import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Toast} from "antd-mobile";
import Url from "../../helpers/Url";
import Header from "../../widgets/Header";
import Tabbar from "../../widgets/Tabbar";

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
  
  componentWillMount() {
    const url = Url.toRoute('news/list', {
      limit: 10
    })
    axios.get(url).then((resp) => {
      console.info(resp)
      this.setState({
        isLoading: false,
        items: resp.data.data.items
      })
      Toast.hide()
    })
  }
  
  render() {
    const {title, className} = this.props
    const {isLoading, items} = this.state
    if (isLoading) {
      Toast.loading("载入中...", 0, null, false);
      return null;
    } else {
      return (
        <div id="page">
          <div id="page-hd">
            <Header/>
          </div>
          <div id="page-bd">
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
          </div>
          <div id="page-ft">
            <Tabbar/>
          </div>
        </div>
      );
    }
    
  }
}

export default NewsList;