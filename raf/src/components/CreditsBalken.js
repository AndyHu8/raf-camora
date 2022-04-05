export default function CreditsBalken() {
  const  OpenHulongWebsite = () => {
    window.open("https://hulongofficial.de/", "_blank")
  }

  return (
    <div style={classes.balken} onClick={OpenHulongWebsite}>
      Created by Hulong RR
    </div>
  );
}

const classes = {
    balken: {
        height: 50,
        width: "100%",
        backgroundColor: "#FCFF1E",
        fontSize: 20,
        fontFamily: "ontserrat, sans-serif",
        textAlign: "center",
        lineHeight: "50px",
        cursor: "pointer"
    }
}
