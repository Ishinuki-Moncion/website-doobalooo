import React, { Component } from 'react'
import Radium from 'radium'

import style from './styles.radium.es6'

@Radium
export default class ButtonSplash extends Component {
  render() {
    return(
      <a style={Object.assign({}, style.btn, style.splash)}>
        {this.props.text}
      </a>
    )
  }
}
