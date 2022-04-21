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
          overflowX: "hidden",
          flexWrap: "wrap"
    },
    imgContainer: {
        height: "auto",
        width: "50%",
        paddingTop: "8%",
        paddingBottom: "8%",
        paddingLeft: "10%",
        paddingRight: "2%",
        justifyContent: "center"
    },
    img: {
        height: "100%",
        width: "100%",
        background: `url(${bioraf})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "5%"
    },
    sideText: {
        height: "auto",
        width: "50%",
        paddingTop: "15%",
        paddingBottom: "15%",
        paddingLeft: "2%",
        paddingRight: "10%",
        fontSize: "1.5vw",
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
        fontSize: "1.5vw",
        paddingTop: "10%"
    },
    downText: {
        display: "block",
        margin: "auto",
        justifyContent: "center",
        paddingTop: "10%",
        paddingBottom: "10%",
        width: "70%",
        fontSize: "1.5vw",
        fontFamily: "'Montserrat', sans-serif",
        textAlign: "center",
    }
  }
  