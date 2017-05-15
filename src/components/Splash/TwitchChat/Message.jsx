import React, { Component } from 'react'
import Radium from 'radium'

@Radium
export default class Message extends Component {
  render() {
    let style = {
      message: {
        color: "whitesmoke",
        margin: "5px 15px",
        overflowWrap: "break-word"
      },
      user: {
        color: this.props.userColor
      }
    }

    return(
      <div style={style.message}>
        <span style={style.user}>{this.props.chatUser}</span>
        <span>: {this.props.chatMessage}</span>
      </div>
    )
  }
}
