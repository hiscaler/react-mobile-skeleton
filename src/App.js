import React, {Component, Fragment} from 'react'
import Notice from "./components/Notice"
import {WhiteSpace} from "antd-mobile"
import NewsList from "./components/homepage/NewsList"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Notice
          limit="3"
        />
        <WhiteSpace/>
        <NewsList
          title="最新资讯"
        />
      </Fragment>
    )
  }
}

export default App