export default function Kachel(props) {
  
    return (
      <div style={classes.kachel}>
        <p style={classes.headline}>{props.headline}</p>
        <p style={classes.year}>Erschienen: {props.year}</p>
        <button style={classes.button} onClick={() => {window.open(`${props.albumLink}", "_blank`)}}>Spotify öffnen</button>
      </div>
    );
  }
  
  const classes = {
    kachel: {
          height: "100%",
          minWidth: "400px",
          fontFamily: "ontserrat, sans-serif",
          textAlign: "center",
          paddingBottom: 20,
          borderRadius: "10px",
          border: "2px solid gray",
          flex: 1,
    },
    headline: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "'Anton', sans-serif",
        marginBottom: 10
    },
    year: {
        fontSize: 20,
        fontFamily: "'Anton', sans-serif",
    },
    button: {
        cursor: "pointer",
        fontSize: 15,
        fontFamily: "ontserrat, sans-serif",
        padding: 15,
        backgroundColor: "black",
        borderRadius: "5px",
        border: "1px solid grey",
        color: "white",
        fontWeight: "bold"
    }
  }
  