import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Toast} from "antd-mobile";
import Url from "../../helpers/Url";

/**
 * News list
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class NewsList extends React.Component {
  
  static defaultProps = {
    title: "",
    moreUrl: "",
    limit: 10,
    className: "widget-news-list"
  }
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      items: []
    };
  }
  
  componentWillMount() {
    Toast.loading("载入中...", 0, null, false);
    const url = Url.toRoute('news/default/index', {
      limit: this.props.limit
    });
    axios.get(url).then((resp) => {
      console.info(resp);
      this.setState({
        isLoading: false,
        items: resp.data.data.items
      });
      Toast.hide();
    })
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    Toast.hide()
  }
  
  render() {
    const {title, className} = this.props;
    const {isLoading, items} = this.state;
    if (isLoading) {
      return null;
    } else {
      return (
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
      );
    }
    
  }
}

export default NewsList;