import React, { Component } from 'react'
import Radium from 'radium'

import Splash from '../../components/Splash/Splash'
import NavBar from '../../components/NavBar/NavBar'
import style from './styles.radium.es6'

@Radium
export default class Home extends Component {
  constructor() {
    super()
    this.state = { navComponent: <div></div> }
  }

  componentDidMount() {
    let ref = this.refs.content
    let thisClass = this
    window.addEventListener('scroll', (scroll) => {
      if (window.scrollY - ref.offsetTop > 0) {
        thisClass.setState({ navComponent: <NavBar /> })
      }
      else {
        thisClass.setState({ navComponent: <div></div> })
      }
    })
  }

  render() {
    return(
      <div>

        <div id="help" style={style.navBar}>
          { this.state.navComponent }
        </div>

        <Splash />

        <div ref="content" style={style.contentContainer}>

        </div>
      </div>
    )
  }
}
