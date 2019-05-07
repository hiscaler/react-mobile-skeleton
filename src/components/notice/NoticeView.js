import React, {Fragment} from 'react';
import {Toast, WingBlank} from "antd-mobile";
import Url from "../../helpers/Url";
import axios from "axios";
import styles from "./NoticeView.module.css";
import moment from "moment/moment"
import {Helmet} from "react-helmet";

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
        <Fragment>
          <Helmet>
            <title>{item.title}</title>
          </Helmet>
          <WingBlank size="md">
            <div className={styles['notice-view']}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.meta}>
              <span className={styles['published-at']}>
                发布时间：{moment.unix(item.published_at).format("YYYY-MM-DD")}
              </span>
                <span className={styles['clicks-count']}>
                浏览次数：{item.clicks_count}
              </span>
              </p>
              <div className={styles.content}>
                <div dangerouslySetInnerHTML={{__html: item.content}}/>
              </div>
            </div>
          </WingBlank>
        </Fragment>
      );
    }
  }
  
}

export default NoticeView
