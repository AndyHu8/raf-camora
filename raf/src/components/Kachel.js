export default function Kachel(props) {
  const classes = {
    container: {
          height: "250px",
          minWidth: "300px",
          fontFamily: "ontserrat, sans-serif",
          borderRadius: 10,
          backgroundColor: "#f2f2f2",
          display: "flex",
          justifyContent: "center",
          flex: 1,
          padding: 20
    },
    img: {
      width: "250px",
      background: `url(${props.img})`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      cursor: "pointer",
      borderRadius: 10,
      "&:hover": {
        margin: 10
      },
    },
  }
  
    return (
      <div style={classes.container}>
        <div style={classes.img} onClick={() => {window.open(`${props.albumLink}", "_blank`)}}/>
      </div>
    );
  }
  