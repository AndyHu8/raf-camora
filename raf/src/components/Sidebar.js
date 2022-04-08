export default function Sidebar(props) {
  
    return (
      <div style={classes.sidebar}></div>
    );
  }
  
  const classes = {
    sidebar: {
          position: "fixed",
          zIndex: 400,
          top: 0,
          left: "-300px",
          width: "300px",
          height: "100%",
          padding: "30px",
          backgroundColor: "black",
          overflowY: "auto",
          transition: "transform 0.45s",
          transform: "translateX(300px)"
    }
    
  }
  