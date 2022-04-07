import raf_home from "./bilderCode/raf_home.png"

export default function Home() {
  
    return (
      <div style={classes.home}>
          <div>
            <div style={classes.headline}>RAF Camora \r\n Raphael Ragucci</div>
            <br/>
            <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
          </div>
      </div>
    );
  }
  
  const classes = {
    home: {
        height: "900px",
          width: "100%",
          background: `url(${raf_home})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cortain",
          backgroundPosition: "center"
    },
    headline: {
        fontFamily: "'Anton', sans-serif"
    }
  }
  