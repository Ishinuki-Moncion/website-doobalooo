import React, { Component } from 'react'
import Radium from 'radium'

import style from './styles.radium.es6'

@Radium
export default class Button extends Component {
  componentWillMount() {
    let btnStyle = {
      splash: {
        fontSize: "1.75em"
      },

      normal: {
        fontSize: "1.25em"
      }
    }

    if (this.props.kind === "splash") {
      Object.assign(style.btn, btnStyle.splash)
    }
    else if (this.props.kind === "normal") {
      Object.assign(style.btn, btnStyle.normal)
    }
  }

  render() {
    return(
      <a style={style.btn}>{this.props.text}</a>
    )
  }
}
