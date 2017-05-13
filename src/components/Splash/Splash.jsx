import React, { Component } from 'react'
import Radium from 'radium'

import TwitchChat from './TwitchChat'
import Button from '../Button/Button'
import style from './styles.radium.es6'
import bgVideo from './magic-cloth-video.mp4'

@Radium
export default class Splash extends Component {
  render() {
    return(
      <div>

        <div style={style.background}>
          <video loop muted autoPlay style={style.backgroundVideo}>
            <source src={bgVideo} type="video/mp4">
            </source>
          </video>
        </div>

        <div style={style.btnDonate}>
          <Button text="Donate"/>
        </div>

        <div style={style.container}>

          <div style={style.title}>
            <p style={style.title_p}>Doobalooo</p>
          </div>

          <div style={style.mediaContainer}>
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

        </div>
      </div>

    )
  }
}
