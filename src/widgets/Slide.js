import React from 'react'
import {Carousel} from "antd-mobile"
import Url from "../helpers/Url";
import axios from "axios";

/**
 * Slide Component
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class Slide extends React.Component {
  
  static defaultProps = {
    limit: 6,
    imageHeight: 176
  }
  
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  
  componentWillMount() {
    const url = Url.toRoute('slide/default/index', {
      fields: 'title,picture_path,url',
      limit: this.props.limit,
    })
    axios.get(url).then((resp) => {
      this.setState({
        items: resp.data.data.items
      })
    })
  }
  
  render() {
    const {imageHeight} = this.props
    return (
      <Carousel
        autoplay={true}
        infinite={true}
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {this.state.items.map(item => (
          <a
            key={item}
            href={item.url}
            style={{display: 'inline-block', width: '100%', height: imageHeight}}
          >
            <img
              src={item.picture_path}
              alt={item.title}
              style={{width: '100%', verticalAlign: 'top', height: imageHeight}}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({imgHeight: 'auto'});
              }}
            />
          </a>
        ))}
      </Carousel>
    )
  }
  
}

export default Slide