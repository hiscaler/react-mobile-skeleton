import React, {Component} from 'react';

/**
 * Header
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class Header extends Component {
  
  static defaultProps = {
    text: "Mobile Skeleton",
    className: "header"
  }
  
  render() {
    const {text, className} = this.props;
    return (
      <header className={className}>{text}</header>
    );
  }
}

export default Header;