import React, { Component } from 'react'
import Radium from 'radium'

import Message from './Message'
import style from './styles.radium.es6'

@Radium
export default class TwitchChat extends Component {
  constructor() {
    super()
    this.state = { chatMessages: [], userColors: [] }
  }

  getChatMessage() {
    let thisClass = this

    // http://stackoverflow.com/questions/40385133/retrieve-data-from-a-readablestream-object
    fetch('/chat')
      .then(function(response) { return response.json() })
      .then(function(data) {
        if (data.length !== 0) {
          for (let i = 0; i < data.length; i++) {
            // console.log(data[i].from + ': ' + data[i].message)
            thisClass.generateNewChat(data[i].from, data[i].message)
          }
          thisClass.getChatMessage()
        }
      })
  }

  // http://stackoverflow.com/questions/36651583/dynamically-add-child-components-in-react
  generateNewChat(user, message) {
    let chatMessages = this.state.chatMessages
    let userColors = this.state.userColors
    let color = null
    let foundUser = false

    // keep a limit on how many chat messages are displayed
    if (chatMessages.length >= 100) {
      chatMessages.shift()
    }

    // check to see if the user already exists; could not user Array.includes()
    if (userColors.length > 0) {
      for (let i = 0; i < userColors.length; i++) {
        if (userColors[i].user === user) {
          color = userColors[i].color
          foundUser = true
          break
        }
      }
    }

    // generate a random color if the user was not found
    if (!foundUser) {
      let hexIndex = null
      let hexColors = ["#0074D9", "#7FDBFF", "#39CCCC", "#3D9970", "#2ECC40",
                       "#01FF70", "#FFDC00", "#FF851B", "#FF4136", "#85144B",
                       "#F012BE", "#B10DC9"]

      while (hexIndex > 11 || hexIndex === null) {
        hexIndex = Math.floor(Math.random() * 10) +
                   Math.floor(Math.random() * 10)
      }

      color = hexColors[hexIndex]

      userColors.push({ user: user, color: color })
    }

    // generate a new chat message
    chatMessages.push(<Message userColor={color} chatUser={user}
      chatMessage={message} />)

    // rerender the div
    this.setState({ chatMessages: chatMessages, userColors: userColors})
  }

  // http://blog.vjeux.com/2013/javascript/scroll-position-with-react.html
  componentWillUpdate() {
    let div = this.refs.chatContainer
    this.chatShouldScroll =
      div.scrollTop + div.clientHeight === div.scrollHeight
  }

  componentDidUpdate() {
    if (this.chatShouldScroll) {
      let div = this.refs.chatContainer
      div.scrollTop = div.scrollHeight + div.clientHeight
    }
  }

  componentWillMount() {
    this.state.chatMessages.push(
      <div style={style.firstMessage}>
        <span>Welcome to Doobalooo's chat!</span>
      </div>
    )
  }

  componentDidMount() {
    this.getChatMessage()
  }

  render() {
    return(
      <div style={style.twitchChat}>

        <div style={style.header}>
          <a style={style.headerAnchor} href="https://www.twitch.tv/doobalooo">
            twitch.tv/doobalooo
          </a>
        </div>

        <div ref="chatContainer" style={style.chatContainer}>
          { this.state.chatMessages }
        </div>

        <div style={style.footer}></div>
      </div>
    )
  }
}
