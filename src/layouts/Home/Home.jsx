import React, { Component } from 'react'
import Radium from 'radium'

import Splash from '../../components/Splash/Splash'
import NavBar from '../../components/NavBar/NavBar'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
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
      if (window.scrollY - ref.offsetTop > -155) {
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

        <div style={style.navBar}>
          { this.state.navComponent }
        </div>

        <Splash />

        <div ref="content"
          style={Object.assign({}, style.contentContainer, style.welcome,
            {boxShadow: "0px 1px 30px rgba(0, 0, 0, 1)"})}>

          {/* Welcome Section */}
          <div style={style.welcomeContainer}>
            <div>
              <SectionTitle text="Welcome!" />
            </div>

            <div style={style.welcomeContent}>
              <div style={style.pWelcomeContainer}>
                <p style={style.p}>Hey! I'm Doob! Lorem ipsum dolor sit amet, quam justo mauris scelerisque lectus, maecenas nulla est arcu, nunc posuere lacus laoreet non fermentum, sodales molestie curabitur eros enim ut nibh. Id ante arcu sed, dui donec metus est ut ut justo, molestie penatibus aliquam consequat tellus, etiam lacus vitae sit senectus quam, in aenean auctor lacus ex vitae et. Dui lectus non id, nascetur maecenas tempus lectus vestibulum, luctus quis sit at nisi corporis porta, et at ac dolor, purus dolor vitae. Aliquet phasellus mattis consequat sed sit, eos ut non, id purus. Erat ut. At in suspendisse feugiat mi ridiculus phasellus, facilisis odio faucibus, quis vehicula, porta vivamus arcu magnis fringilla, wisi augue congue mi. At penatibus, mauris est id quis, feugiat venenatis non et. Imperdiet sit vitae, ut penatibus commodo, lacinia suspendisse nulla dui, diam nec nonummy nec lacinia. Quisque sagittis sagittis vel, fermentum luctus erat quis malesuada, augue eu pellentesque voluptatibus nec rhoncus a, massa aliquet adipiscing leo nulla dolor, nibh aliquet. Sit libero. Vulputate interdum ornare sollicitudin enim vel libero. Nec pellentesque curabitur, velit placerat adipiscing sed necessitatibus dolorum sed, ac sed wisi conubia luctus, tortor id arcu suspendisse urna lacus.</p>
              </div>
              <div style={style.twitter}>
                <a class="twitter-timeline" width="inherit" height="inherit"
                  href="https://twitter.com/therealdoobaloo">
                  Tweets by Doobalooo
                </a>
              </div>
            </div>
          </div>

          <div style={
            Object.assign({}, style.contentContainer, style.getInvolved)}>

          </div>

        </div>
      </div>
    )
  }
}
