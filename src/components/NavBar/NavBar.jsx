import React, { Component } from 'react'
import Radium from 'radium'

import ButtonNav from '../Button/ButtonNav'

@Radium
export default class NavBar extends Component {

  render() {

    let style = {
      navBar: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(to right, #4568DC, #B06AB3)",
        height: "55px",
        boxShadow: "0px -1px 30px rgba(0, 0, 0, 1)"
      },

      title: {
        fontFamily: "'Arizonia'",
        fontSize: "3.25em",
        color: "whitesmoke",
        textShadow: "-1px 1px 2px #343434",
        width: "100%",
        textAlign: "center",
        pointerEvents: "none"
      },

      btn: {
        position: "absolute",
        right: "15px"
      }
    }

    return(
      <div style={style.navBar}>

        <span style={style.title}>Doobalooo</span>

        <div style={style.btn}>
          <ButtonNav text="Donate" />
        </div>

      </div>
    )
  }
}
