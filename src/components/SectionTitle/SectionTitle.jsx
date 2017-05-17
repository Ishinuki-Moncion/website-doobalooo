import React, { Component } from 'react'
import Radium from 'radium'

@Radium
export default class SectionTitle extends Component {
  render() {

    let style = {
      fontFamily: "'Russo One'",
      fontWeight: "bold",
      fontSize: "4em",
      margin: "0px",
      width: "100%",
      color: "white",
      textShadow: "1px 1px 3px #131313"
    }

    return(
      <h2 style={style}>{this.props.text}</h2>
    )
  }
}
