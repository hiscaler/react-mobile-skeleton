import React from 'react';
import axios from "axios/index";
import moment from "moment/moment";
import Url from "../../helpers/Url";
import {Toast} from "antd-mobile/lib/index";
import Tabbar from "../../widgets/Tabbar";
import Header from "../../widgets/Header";
import "./NewsView.css";

class NewsView extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      article: undefined
    };
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;
    const url = Url.toRoute('news/' + id);
    axios.get(url).then((resp) => {
      console.info(resp.data.data);
      this.setState({
        isLoading: false,
        article: resp.data.data
      });
      Toast.hide();
    })
  }
  
  render() {
    const {isLoading, article} = this.state;
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
            <div className="news-detail">
              <h1 className="title">{article.title}</h1>
              <p className="meta">
                发布时间: {moment.unix(article.publishedAt).format("YYYY-MM-DD")}
              </p>
              <div className="body">
                {article.description}
              </div>
            </div>
          </div>
          <Tabbar/>
        </div>
      );
    }
  }
  
}

export default NewsView;