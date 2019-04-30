import React from 'react'
import {Button, InputItem, List, TextareaItem, WhiteSpace} from "antd-mobile";

/**
 * Member profile
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class MemberProfile extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit() {
    alert('dd')
  }
  
  render() {
    return (
      <div>
        <List>
          <InputItem
            type="text"
            defaultValue={100}
            placeholder="start from left"
            clear
            moneyKeyboardAlign="left"
          >账号</InputItem>
          <InputItem
            type="text"
            defaultValue={100}
            placeholder="请输入您的姓名"
            clear
            moneyKeyboardAlign="left"
          >姓名</InputItem>
          <InputItem
            type="text"
            defaultValue={100}
            placeholder="请输入您的手机号码"
            clear
            moneyKeyboardAlign="left"
          >手机号码</InputItem>
          <TextareaItem
            title="备注"
            placeholder="请输入备注"
            ref={el => this.autoFocusInst = el}
            autoHeight
          />
          <WhiteSpace/>
          <Button onClick={this.handleSubmit} type="primary">保存</Button>
        </List>
      
      </div>
    )
  }
}

export default MemberProfile