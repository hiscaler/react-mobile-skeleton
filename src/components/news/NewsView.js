import React, {Fragment} from 'react'
import axios from "axios/index"
import moment from "moment/moment"
import Url from "../../helpers/Url"
import {Toast, WingBlank} from "antd-mobile/lib/index"
import {Helmet} from "react-helmet";
import styles from './NewsView.module.css'

/**
 * 资讯详情组件
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class NewsView extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      item: undefined
    }
  }
  
  componentDidMount() {
    Toast.loading("载入中...", 0, null, false)
    const id = this.props.match.params.id
    const url = Url.toRoute('news/default/view', {
      id: id,
      fields: "title,is_picture_news,picture_path,clicks_count,published_at",
      expand: "content"
    })
    axios.get(url).then((resp) => {
      console.info(resp.data.data)
      this.setState({
        isLoading: false,
        item: resp.data.data
      })
    })
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    Toast.hide()
  }
  
  render() {
    const {isLoading, item} = this.state
    if (isLoading) {
      return null
    } else {
      return (
        <Fragment>
          <Helmet>
            <title>{item.title}</title>
          </Helmet>
          <WingBlank size="md">
            <div className={styles['news-detail']}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.meta}>
              <span className={styles['published-at']}>
                发布时间：{moment.unix(item.published_at).format("YYYY-MM-DD")}
              </span>
                <span className={styles['clicks-count']}>
                浏览次数：{item.clicks_count}
              </span>
              </p>
              <div className={styles.body}>
                <div dangerouslySetInnerHTML={{__html: item.content}}/>
              </div>
            </div>
          </WingBlank>
        </Fragment>
      )
    }
  }
  
}

export default NewsView