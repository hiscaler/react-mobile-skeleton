import React from 'react';
import {Toast, WingBlank} from "antd-mobile";
import Url from "../../helpers/Url";
import axios from "axios";
import "./NoticeView.css";
import moment from "moment/moment"

class NoticeView extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      item: undefined
    };
  }
  
  componentDidMount() {
    Toast.loading("载入中...", 0, null, false);
    const id = this.props.match.params.id;
    const url = Url.toRoute('notice/default/view', {
      id: id,
      fields: "title,clicks_count,published_at,content"
    });
    axios.get(url).then((resp) => {
      console.info(resp.data.data);
      this.setState({
        isLoading: false,
        item: resp.data.data
      });
    });
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    Toast.hide();
  }
  
  render() {
    const {isLoading, item} = this.state;
    if (isLoading) {
      return null;
    } else {
      return (
        <WingBlank size="md">
          <div className="notice-view">
            <h1 className="title">{item.title}</h1>
            <p className="meta">
              <span className="published-at">
                发布时间：{moment.unix(item.published_at).format("YYYY-MM-DD")}
              </span>
              <span className="clicks-count">
                浏览次数：{item.clicks_count}
              </span>
            </p>
            <div className="content">
              <div dangerouslySetInnerHTML={{__html: item.content}}/>
            </div>
          </div>
        </WingBlank>
      );
    }
  }
  
}

export default NoticeView
