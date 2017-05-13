
module.exports = {
  container: {
    position: "absolute",
    display: "block",
    top: "0px",
    width: "100%",
    height: "100%"
  },

  background: {
    poistion: "absolute",
    zIndex: "-20",
    width: "100%",
    height: "100%",
    overflow: "hidden"
  },

  backgroundVideo: {
    width: "100%",
    height: "100%",
    filter: "blur(3px)",
    transform: "scale(1.03)"
  },

  title: {
    color: "whitesmoke",
    textAlign: "center",
    width: "100%",
    top: "0px",
    margin: "20px auto -10px",
    fontSize: "15.5em",
  },

  title_p: {
    margin: "auto",
    lineHeight: "0.85",
    fontFamily: "'Arizonia', cursive",
    textShadow: "1px 2px 1px #575757",
    transform: "rotate(-1deg)"
  },

  mediaContainer: {
    zIndex: "10",
    display: "flex",
    width: "900px",
    margin: "auto"
  },

  twitchPlayer: {
    width: "525px",
    height: "350px",
    top: "0px"
  },

  // TwitchChat Component //
  twitchChat: {
    width: "350px",
    height: "350px",
    marginLeft: "25px",
    background: "blue"
  }
}