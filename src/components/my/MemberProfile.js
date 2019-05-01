import React from 'react'
import {Button, InputItem, List, TextareaItem, Toast, WhiteSpace} from "antd-mobile"
import axios from 'axios'
import Url from "../../helpers/Url"
import Item from "antd-mobile/es/popover/Item"

/**
 * Member profile
 *
 * @author hiscaler <hiscaler@gmail.com>
 */
class MemberProfile extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      username: undefined,
      real_name: undefined,
      mobile_phone: undefined,
      remark: undefined
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentWillMount() {
    this.setState({
      username: "hiscaler",
      real_name: "数字",
      mobile_phone: 15888888888,
      remark: ''
    })
  }
  
  handleSubmit(event) {
    const payload = new FormData()
    payload.real_name = this.state.real_name
    payload.mobile_phone = this.state.mobile_phone
    payload.remark = this.state.remark
    console.info(payload)
    const url = Url.toRoute('member')
    axios.patch(url, payload).then(res => {
      Toast.success('会员资料修改成功')
      console.log(res)
    })
    event.preventDefault()
  }
  
  render() {
    const {username, real_name, mobile_phone, remark} = this.state
    return (
      <div>
        <form>
          <List>
            <InputItem
              type="text"
              defaultValue={username}
              editable={false}
            >账号</InputItem>
            <InputItem
              type="text"
              name="real_name"
              defaultValue={real_name}
              value={real_name}
              placeholder="请输入您的姓名"
              clear
              moneyKeyboardAlign="left"
              onChange={(real_name) => {
                this.setState({real_name})
              }}
            >姓名</InputItem>
            <InputItem
              type="phone"
              name="mobile_phone"
              defaultValue={mobile_phone}
              placeholder="请输入您的手机号码"
              clear
              moneyKeyboardAlign="left"
              onChange={(mobile_phone) => {
                this.setState({mobile_phone})
              }}
            >手机号码</InputItem>
            <TextareaItem
              title="备注"
              name="remark"
              defaultValue={remark}
              placeholder="请输入备注"
              ref={el => this.autoFocusInst = el}
              autoHeight
              onChange={(remark) => {
                this.setState({remark})
              }}
            />
            <WhiteSpace/>
            <Item>
              <Button type="primary" onClick={this.handleSubmit}>保存</Button>
            </Item>
          </List>
        </form>
      </div>
    )
  }
}

export default MemberProfile