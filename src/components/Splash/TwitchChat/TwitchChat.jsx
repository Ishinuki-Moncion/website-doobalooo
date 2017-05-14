import React, { Component } from 'react'
import Radium from 'radium'
import IRC from 'twitch-irc-lite'

import style from './styles.radium.es6'

@Radium
export default class extends Component {
  componentDidMount() {
    setInterval(() => {
      // http://stackoverflow.com/questions/40385133/retrieve-data-from-a-readablestream-object
      fetch('/chat')
        .then(function(response) {
          // console.log(response.json())
          // if (response.length !== 0) console.log(response)
          // else return
          return response.json()
        })
        .then(function(data) {
          if (data.length !== 0) {
            for (let i = 0; i < data.length; i++) {
              console.log(data[i].from + ': ' + data[i].message)
            }
          }
          else return
        })
    }, 100)
  }

  render() {
    return(
      <div style={style.twitchChat}>
      </div>
    )
  }
}
