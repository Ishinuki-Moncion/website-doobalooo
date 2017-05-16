
module.exports = {
  container: {
    position: "absolute",
    display: "block",
    top: "0px",
    width: "100%",
    height: "100%"
  },

  background: {
    position: "relative",
    zIndex: "-20",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    minHeight: "720px",
    minWidth: "975px"
  },

  backgroundVideo: {
    position: "absolute",
    // 16:9 aspect ratio; allows image to resize with browser window
    paddingBottom: "56.25%",
    filter: "blur(3px)",
    transform: "scale(1.03)"
  },

  btnDonate: {
    zIndex: "10",
    position: "absolute",
    right: "0px",
    top: "0px",
    marginRight: "1.5em",
    marginTop: "1.5em"
  },

  title: {
    pointerEvents: "none",
    color: "whitesmoke",
    textAlign: "center",
    width: "100%",
    top: "0px",
    margin: "20px auto -10px",
    fontSize: "15.5em"
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
    top: "0px",
    borderRadius: "3% / 5%",
    overflow: "hidden"
  },

  learnMoreContainer: {
    position: "relative",
    minHeight: "125px",
    height: null
  },

  learnMore: {
    position: "absolute",
    zIndex: "0",
    display: "block",
    width: "100%",
    bottom: "0px",
    marginBottom: "30px",
    textAlign: "center",
    color: "rgba(25, 23, 28, 0.3)",
    cursor: "pointer",

    ':hover': {
      color: "whitesmoke",
      textShadow: "0px 0px 3px rgba(255, 255, 255, 0.4)"
    },

    ':active': {
      color: "#DDDDDD"
    }
  },

  learnMoreText: {
    fontFamily: "'Architects Daughter'",
    fontWeight: "bold",
    fontSize: "1.75em",
    width: "inherit"
  },

  fontAwesome: {
    display: "inline-block",
    fontFamily: "'FontAwesome'",
    fontSize: "3em",
    textRendering: "auto",
    fontStyle: "normal",
    width: "inherit"
  }
}
