import React, { Component } from 'react'
import Radium from 'radium'

import TwitchChat from './TwitchChat/TwitchChat'
import Button from '../Button/Button'
import style from './styles.radium.es6'
import bgVideo from './magic-cloth-video.mp4'

@Radium
export default class Splash extends Component {
  constructor() {
    super()
    let learnMoreHeight = style.learnMoreContainer.height
    this.state = { learnMoreHeight }
  }

  componentDidMount() {
    let newHeight = (this.refs.container.clientHeight -
                     this.refs.title.clientHeight -
                     this.refs.media.clientHeight).toString() + "px"
    style.learnMoreContainer.height = newHeight
    this.setState({
      learnMoreHeight: newHeight
    })
  }

  onLearnClick() {
    console.log("clicked!")
  }

  render() {
    return(
      <div style={style.splashContainer}>

        <div style={style.background}>
          <video loop muted autoPlay style={style.backgroundVideo}>
            <source src={bgVideo} type="video/mp4">
            </source>
          </video>
        </div>

        <div style={style.btnDonate}>
          <Button kind="splash" text="Donate"/>
        </div>

        <div ref="container" style={style.container}>

          <div ref="title" style={style.title}>
            <p style={style.title_p}>Doobalooo</p>
          </div>

          <div ref="media" style={style.mediaContainer}>
            <div style={style.twitchPlayer}>
              <iframe
                src="https://player.twitch.tv/?channel=doobalooo"
                height="100%"
                width="100%"
                frameBorder="0"
                scrolling="no">
              </iframe>
            </div>

            <TwitchChat />
          </div>

          <div style={style.learnMoreContainer}
            onClick={this.onLearnClick()}>
            <div style={style.learnMore}>
              <span style={style.learnMoreText}>
                Learn About The Doob Crew
              </span>
              {/* http://stackoverflow.com/questions/17254339/font-awesome-unicode */}
              <i style={style.fontAwesome}>&#xf107;</i>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
