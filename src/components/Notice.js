import React from 'react'
import {NoticeBar} from "antd-mobile"
import Url from "../helpers/Url"
import axios from "axios"

/**
 * Notice component
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class Notice extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      item: []
    }
  }
  
  componentWillMount() {
    const url = Url.toRoute('news/list', {
      limit: 1
    })
    axios.get(url).then((resp) => {
      if (resp.data.success) {
        this.setState({
          item: resp.data.data.items[0]
        })
      }
    })
  }
  
  render() {
    const {item} = this.state
    if (item) {
      return (
        <NoticeBar marqueeProps={{loop: false, style: {padding: '0 7.5px'}}}>
          {item.title}
        </NoticeBar>
      )
    } else {
      return null
    }
  }
  
}

export default Notice