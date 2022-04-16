import bioraf from "./bilderCode/bioraf.jpg"

export default function Biografie() {
  
    return (
        <>
      <div style={classes.container}>
          <div style={classes.imgContainer}><div style={classes.img}/></div>
          <div style={classes.sideText}>
              <p style={classes.headline}>RAF CAMORA - BIOGRAFIE</p>
              Erwachsen, reflektiert und schonungslos ehrlich berichtet Raphael „RAF Camora“ Ragucci in seiner selbst geschriebenen Autobiografie, „Der Pakt“, von der unglaublichen bisherigen Reise seiner Karriere, die ihn aus einfachen Verhältnissen von West-Wien über Berlin nach Barcelona bis hin ins Ferne Tokio bringt.
              <p style={classes.mehrErfahren} onClick={() => {window.open("https://de.wikipedia.org/wiki/RAF_Camora", "_blank")}}>MEHR ERFAHREN</p>
              </div>
      </div>
      <div style={classes.downText}>Erwachsen, reflektiert und schonungslos ehrlich berichtet Raphael „RAF Camora“ Ragucci in seiner selbst geschriebenen Autobiografie, „Der Pakt“, von der unglaublichen bisherigen Reise seiner Karriere, die ihn aus einfachen Verhältnissen von West-Wien über Berlin nach Barcelona bis hin ins Ferne Tokio bringt.</div>
      </>
    );
  }
  
  const classes = {
    container: {
        height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: "#f2f2f2",
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
        fontSize: 30,
        fontFamily: "ontserrat, sans-serif",
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
        fontFamily: "ontserrat, sans-serif",
        textAlign: "center",
    }
  }
  