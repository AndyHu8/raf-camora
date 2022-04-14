export default function Kachel(props) {
  const classes = {
    container: {
          height: "100%",
          minWidth: "400px",
          fontFamily: "ontserrat, sans-serif",
          textAlign: "center",
          borderRadius: "10px",
          backgroundColor: "#f2f2f2",
          display: "flex",
          justifyContent: "space-around",
          flex: 1,
    },
    img: {
      width: "300px",
      backgroundColor: "red",
      background: `url(${props.img})`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    desc: {
      width: "50%",
      paddingBottom: 20
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
  
    return (
      <div style={classes.container}>
        <div style={classes.img}></div>
        <div style={classes.desc}>
          <p style={classes.headline}>{props.headline}</p>
          <p style={classes.year}>Erschienen: {props.year}</p>
          <button style={classes.button} onClick={() => {window.open(`${props.albumLink}", "_blank`)}}>Spotify öffnen</button>
        </div>
      </div>
    );
  }
  