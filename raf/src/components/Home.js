import raf_home from "./bilderCode/raf_home.png"

export default function Home() {
  
    return (
      <div style={classes.home} id="home">
          <div style={classes.wrapper}>
            <div style={classes.headline}>
              <div style={classes.headlinePara}>RAF Camora - Raphael Ragucci</div>
              <hr/>
            <div style={classes.infotext}><p>Seit damals wollt' ich meine erste Million'n bis zum nächsten Millennium sparen. (aber)
                  Doch Fahrräder knacken und Gras ticken reichte nicht mal für die Pennymarkt-Marken.</p>- RAF Camora - Alles probiert</div>
          </div>
        </div>
      </div>
    );
  }
  
  const classes = {
    home: {
      position: "relative",
        height: "60vw",
          width: "100%",
          background: `url(${raf_home})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflowX: "hidden"
    },
    wrapper: {
      position: "absolute",
      textTransform: "uppercase",
      height: "50%",
      width: "50%",
      top: "70%",
      left: "35%",
      transform: "translate(-50%,-50%)",
    },
    headline: {
        fontFamily: "'Montserrat', sans-serif",
    },
    headlinePara: {
        fontSize: "2.5vw"
    },
    infotext: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "1.5vw",
      color: "#474747"
    }
  }
  