import React, { Component } from 'react'
import Radium from 'radium'

import style from './styles.radium.es6'

@Radium
export default class ButtonNav extends Component {
  render() {
    return(
      <a style={Object.assign({}, style.btn, style.normal)}>
        {this.props.text}
      </a>
    )
  }
}
