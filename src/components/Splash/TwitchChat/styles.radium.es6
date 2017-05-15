// TwitchChat Component //

let headerHeight = 30
let footerHeight = 20
let parentHeight = 350

module.exports = {
  twitchChat: {
    width: "350px",
    height: parentHeight.toString() + "px",
    marginLeft: "25px",
    background: "rgba(25, 23, 28, 0.97)",
    borderRadius: "4.5%",
    overflow: "hidden"
  },

  chatContainer: {
    display: "block",
    overflow: "auto",
    width: "inherit",
    height: (parentHeight - (headerHeight + footerHeight)).toString() + "px"
  },

  firstMessage: {
    margin: "5px 15px",
    textAlign: "center",
    color: "#454545"
  },

  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: headerHeight.toString() + "px",
    width: "inherit",
    boxShadow: "0px -5px 15px #343434",
    textAlign: "center"
  },

  headerAnchor: {
    textDecoration: "none",
    color: "whitesmoke",
    fontFamily: "'Architects Daughter'",
  },

  footer: {
    height: footerHeight.toString() + "px",
    width: "inherit",
    boxShadow: "0px 5px 15px #343434"
  }
}
