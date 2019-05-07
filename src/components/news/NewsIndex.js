import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {SearchBar, Toast, WingBlank} from "antd-mobile"
import Url from "../../helpers/Url"
import {Helmet} from "react-helmet"

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
      searched: false,
      isLoading: true,
      items: []
    }
  }
  
  componentWillMount() {
    Toast.loading("载入中...", 0, null, false)
    const url = Url.toRoute('news/default/index', {
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
        <Fragment>
          <Helmet>
            <title>资讯</title>
          </Helmet>
          <SearchBar
            placeholder="请输入您要搜索的资讯标题"
            onSubmit={value => {
              if (!this.state.searched && !value.length) {
                Toast.info("请输入搜索关键词")
              } else {
                this.setState({searched: true})
                Toast.loading("载入中...", 0, null, false)
                let params = {limit: 10}
                if (value) {
                  params['title'] = value
                }
                const url = Url.toRoute('news/default/index', params)
                axios.get(url).then((resp) => {
                  this.setState({
                    isLoading: false,
                    items: resp.data.data.items
                  })
                })
                Toast.hide()
              }
            }}
          />
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
        </Fragment>
      )
    }
  }
}

export default NewsIndex