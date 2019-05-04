import React, {Component, Fragment} from 'react'
import Notice from "./components/Notice"
import {WhiteSpace, WingBlank} from "antd-mobile"
import NewsList from "./components/homepage/NewsList"
import Slide from "./widgets/Slide"

class App extends Component {
  
  render() {
    return (
      <Fragment>
        <Slide
          limit={6}
          imageHeight={176}
        />
        <Notice/>
        <WhiteSpace/>
        <WingBlank size="md">
          <NewsList
            title="最新资讯"
            limit='10'
          />
        </WingBlank>
      </Fragment>
    )
  }
  
}

export default App