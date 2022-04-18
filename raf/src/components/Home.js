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
        height: "100vh",
          width: "100%",
          background: `url(${raf_home})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflowX: "hidden"
    },
    wrapper: {
      textTransform: "uppercase",
      width: "50%",
      marginLeft: "10%",
      marginTop: "15%"
    },
    headline: {
        fontFamily: "'Montserrat', sans-serif",
    },
    headlinePara: {
        margin: 0,
        fontSize: 40
    },
    infotext: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 25,
      color: "#474747"
    }
  }
  