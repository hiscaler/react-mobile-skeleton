import React, {Component, Fragment} from 'react'
import Notice from "./components/Notice"
import {Carousel, WhiteSpace, WingBlank} from "antd-mobile"
import NewsList from "./components/homepage/NewsList"

class App extends Component {
  
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  
  render() {
    return (
      <Fragment>
        <Carousel
          autoplay={true}
          infinite={true}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{width: '100%', verticalAlign: 'top'}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({imgHeight: 'auto'});
                }}
              />
            </a>
          ))}
        </Carousel>
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