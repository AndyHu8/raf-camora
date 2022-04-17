import bioraf from "./bilderCode/bioraf.jpg"

export default function Biografie() {
  
    return (
        <>
      <div style={classes.container} id="biografie">
          <div style={classes.imgContainer}><div style={classes.img}/></div>
          <div style={classes.sideText}>
              <p style={classes.headline}>RAF CAMORA - BIOGRAFIE</p>
              Erwachsen, reflektiert und schonungslos ehrlich berichtet Raphael „RAF Camora“ Ragucci in seiner selbst geschriebenen Autobiografie, „Der Pakt“, von der unglaublichen bisherigen Reise seiner Karriere, die ihn aus einfachen Verhältnissen von West-Wien über Berlin nach Barcelona bis hin ins Ferne Tokio bringt.
              <p style={classes.mehrErfahren} onClick={() => {window.open("https://der-pakt.com/", "_blank")}}>MEHR ERFAHREN</p>
            </div>
      </div>
      <div style={classes.downText}>RAF Camora (4. Juni 1984 in Vevey; bürgerlich Raphael Ragucci), auch bekannt als RAF 3.0, früher Raf0Mic, ist ein österreichischer Dancehall- und Hip-Hop-Musiker und Produzent aus Wien, der in Berlin lebt.</div>
      </>
    );
  }
  
  const classes = {
    container: {
        textTransform: "uppercase",
        height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: "#f2f2f2",
          overflowX: "hidden"
    },
    imgContainer: {
        width: "50%",
        paddingTop: 100,
        paddingBottom: 100,
        paddingLeft: 250,
        paddingRight: 100,
    },
    img: {
        backgroundColor: "blue",
        height: "100%",
        width: "auto",
        background: `url(${bioraf})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    sideText: {
        paddingTop: 200,
        paddingBottom: 200,
        paddingLeft: 100,
        paddingRight: 250,
        width: "50%",
        fontSize: 25,
        fontFamily: "'Montserrat', sans-serif",
        textAlign: "center",
        color: "#A0AEC0"
    },
    headline: {
        fontWeight: "bold",
        color: "black",
    },
    mehrErfahren: {
        color: "black",
        textDecoration: "underline",
        cursor: "pointer",
        fontSize: 22,
        paddingTop: 50
    },
    downText: {
        display: "block",
        margin: "auto",
        justifyContent: "center",
        paddingTop: 200,
        paddingBottom: 200,
        width: "70%",
        fontSize: 30,
        fontFamily: "'Montserrat', sans-serif",
        textAlign: "center",
    }
  }
  