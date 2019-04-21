import React, {Component} from 'react';
import Header from "./widgets/Header";
import Tabbar from "./widgets/Tabbar";
import Notice from "./components/Notice";
import {WhiteSpace} from "antd-mobile";
import NewsList from "./components/homepage/NewsList";

class App extends Component {
  render() {
    return (
      <div id="page">
        <div id="page-hd">
          <Header/>
        </div>
        <div id="page-bd">
          <Notice
            limit="3"
          />
          <WhiteSpace/>
          <NewsList
            title="最新资讯"
          />
        </div>
        <div id="page-ft">
          <Tabbar/>
        </div>
      </div>
    );
  }
}

export default App;
