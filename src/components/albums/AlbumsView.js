import React from 'react'
import {Toast} from "antd-mobile"
import Url from "../../helpers/Url"
import axios from "axios"
import "./AlbumsView.css"

/**
 * Albums View
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class AlbumsView extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      isLoading: true,
      item: undefined
    }
  }
  
  
  componentWillMount() {
    const id = this.props.match.params.id;
    const url = Url.toRoute('albums/' + id);
    axios.get(url).then((resp) => {
      console.info(resp.data.data);
      this.setState({
        isLoading: false,
        item: resp.data.data
      });
      Toast.hide();
    })
  }
  
  render() {
    const {isLoading, item} = this.state;
    if (isLoading) {
      Toast.loading("载入中...", 0, null, false)
      return null
    } else {
      return (
        <div className="album-view">
          <h1 className="title">{item.title}</h1>
          <div className="description">
            {item.description}
          </div>
          <div className="screenshot">
            <img src={item.screenshotPath} alt={item.title}/>
          </div>
        </div>
      )
    }
  }
  
}

export default AlbumsView