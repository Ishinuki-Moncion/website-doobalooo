import React, { Component } from 'react'
import Radium from 'radium'

import style from './styles.radium.es6'

@Radium
export default class Button extends Component {
  render() {
    return(
      <a style={style.btn}>Donate</a>
    )
  }
}
