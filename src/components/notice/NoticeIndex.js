import React, {Fragment} from 'react';
import {Icon, Pagination, SearchBar, Toast, WingBlank} from "antd-mobile";
import Url from "../../helpers/Url";
import axios from "axios";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

class NoticeIndex extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      page: 1,
      data: {}
    };
    
    this.fetch = this.fetch.bind(this);
  }
  
  static defaultProps = {
    pageSize: 1,
  };
  
  fetch() {
    const {pageSize} = this.props;
    const {page} = this.state;
    console.info("page" + page)
    Toast.loading("载入中...", 0, null, false)
    const url = Url.toRoute('notice/default/index', {
      'page': page,
      'per-page': pageSize,
    });
    axios.get(url).then((resp) => {
      this.setState({
        isLoading: false,
        data: resp.data.data
      });
    });
  }
  
  componentWillMount() {
    this.fetch();
  }
  
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    Toast.hide();
  }
  
  render() {
    const {isLoading, data} = this.state;
    if (isLoading) {
      return null;
    } else {
      return (
        <Fragment>
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
                const url = Url.toRoute('notice/default/index', params)
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
            <div className="widget-box">
              <div className="bd">
                <ul className="list">
                  {data.items.map(item => <li key={item.id}>
                    <Link to={'/notice/' + item.id} title={item.title}>{item.title}</Link>
                  </li>)}
                </ul>
              </div>
              <div className="ft">
                <Pagination
                  className="pager"
                  mode="button"
                  total={data._meta.pageCount}
                  current={data._meta.currentPage}
                  locale={{
                    prevText: (<span className="arrow-align"><Icon type="left"/>上一页</span>),
                    nextText: (<span className="arrow-align">下一页<Icon type="right"/></span>),
                  }}
                  onChange={page => {
                    console.info(this);
                    console.info(page);
                    this.setState({page: page});
                    console.info(this.state.page)
                    this.fetch()
                    return true;
                  }}
                />
              </div>
            </div>
          </WingBlank>
        </Fragment>
      );
    }
  }
  
}

export default NoticeIndex;