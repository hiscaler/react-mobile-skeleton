import React from "react";
import {List} from "antd-mobile";
import User from "../../helpers/Identity";

const Item = List.Item

/**
 * Member Dashboard
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class Dashboard extends React.Component {
  
  render() {
    return (
      <List renderHeader={() => '会员中心'}>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {
            this.props.history.push('/news')
          }}
        >
          咨询中心
        </Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => {
            User.logout();
            this.props.history.push('/')
          }}
          arrow="horizontal"
        >
          退出
        </Item>
      </List>
    );
  }
  
}

export default Dashboard;