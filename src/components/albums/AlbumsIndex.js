import React from 'react'
import {Toast} from "antd-mobile"
import {Link} from "react-router-dom"
import Url from "../../helpers/Url"
import axios from "axios"
import "./AlbumsIndex.css"

/**
 * Albums index
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class AlbumsIndex extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      isLoading: true,
      items: []
    }
  }
  
  static defaultProps = {
    page: 1,
    pageSize: 6
  }
  
  componentWillMount() {
    Toast.loading("载入中...", 0, null, false)
    const url = Url.toRoute('albums', {
      page: this.props.page,
      pageSize: this.props.pageSize
    })
    axios.get(url).then((resp) => {
      console.info(resp)
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
    const {isLoading, items} = this.state
    if (isLoading) {
      return null
    } else {
      return (
        <div className="albums">
          <div className="bd">
            <ul className="photos">
              {items.map(item => <li key={item.id}>
                  <Link to={'/albums/' + item.id} title={item.description}>
                    <div className="photo">
                      <img src={item.screenshotPath} alt={item.title}/>
                    </div>
                    <div className="title">{item.title}</div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )
    }
  }
  
}

export default AlbumsIndex