import React, { Component } from 'react'
import Radium from 'radium'

import style from './styles.radium.jsx'

@Radium
export default class extends Component {
  render() {
    return(
      <div style={style.twitchChat}>
      </div>
    )
  }
}
