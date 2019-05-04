import React from 'react'
import {Button, ImagePicker, InputItem, List, TextareaItem, Toast, WhiteSpace, WingBlank} from "antd-mobile"
import axios from 'axios'
import Url from "../../helpers/Url"
import Item from "antd-mobile/es/popover/Item"
import './MemberProfile.css'

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
      files: [],
      real_name: undefined,
      mobile_phone: undefined,
      remark: undefined
    }
    
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentWillMount() {
    this.setState({
      username: "hiscaler",
      avatar: null,
      real_name: "数字",
      mobile_phone: 15888888888,
      remark: ''
    })
  }
  
  onChange = (files, type, index) => {
    console.info(files, type, index)
    this.setState({
      files,
    })
  }
  
  handleSubmit(event) {
    let payload = new FormData()
    payload.append("real_name", this.state.real_name)
    if (this.state.files.length) {
      payload.append("avatar", this.state.files[0].file)
    }
    payload.append("mobile_phone", this.state.mobile_phone)
    payload.append("remark", this.state.remark)
    const url = Url.toRoute('member/update')
    axios.patch(url, payload).then(res => {
      Toast.success('会员资料修改成功')
      console.log(res)
    }).catch(error => {
      if (error.response) {
        let errorMessages = []
        const messages = error.response.data.error
        for (let i in messages) {
          errorMessages.push((parseInt(i) + 1) + '. ' + messages[i].message)
        }
        Toast.fail(errorMessages)
      }
    })
    event.preventDefault()
  }
  
  render() {
    const {username, files, real_name, mobile_phone, remark} = this.state
    return (
      <WingBlank>
        <form>
          <List>
            <div className="avatar">
              <ImagePicker
                length="6"
                files={files}
                onChange={this.onChange}
                onImageClick={(index, fs) => console.log(index, fs)}
                selectable={files.length < 1}
                length={1}
                disableDelete
                accept="image/gif,image/jpeg,image/jpg,image/png"
              />
            </div>
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
      </WingBlank>
    )
  }
}

export default MemberProfile