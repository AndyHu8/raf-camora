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
    height: "3vw",
        width: "100%",
        backgroundColor: "#FCFF1E",
        fontSize: "2vw",
        fontFamily: "'Montserrat', sans-serif",
        textAlign: "center",
        lineHeight: "45px",
        cursor: "pointer",
        position: "relative"
  }
}
