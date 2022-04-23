import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function QuickLinks() {
  
    return (
      <div style={classes.containerOuter} id="quickLinks">
        <div style={classes.container}>
        <div>
            <p style={classes.UlHeadline}>QUICK LINKS</p>
            <ul>
                <li style={classes.listElement} onClick={() => {window.open("https://hulongofficial.de/", "_blank")}}>Creator of this Website</li>
            </ul>
        </div>
        <div>
            <p style={classes.UlHeadline}>SOCIAL</p>
            <ul style={classes.socialUl}>
                <li style={classes.socialElement} onClick={() => {window.open("https://facebook.com/RAFCamora.official", "_blank")}}><FacebookIcon sx={{ fontSize: 35 }}/></li>
                <li style={classes.socialElement} onClick={() => {window.open("https://www.instagram.com/raf_camora", "_blank")}}><InstagramIcon sx={{ fontSize: 35 }}/></li>
            </ul>
        </div>
        </div>
      </div>
    );
  }
  
  const classes = {
    containerOuter: {
        padding: "2%",
        backgroundColor: "black",
        overflowX: "hidden"
    },
    container: {
          height: "30%",
          display: "flex",
          width: "100%",
          backgroundColor: "black",
          fontSize: "2vw",
          fontFamily: "'Montserrat', sans-serif",
          lineHeight: "35px",
          color: "white",
          justifyContent: "space-between",
    },
    listElement: {
        listStyle: "none",
        textDecoration: "none",
        fontSize: "2vw",
        cursor: "pointer",
        paddingTop: "5%"
    },
    socialUl: {
        display: "flex"
    },
    socialElement: {
        listStyle: "none",
        textDecoration: "none",
        fontSize: "2vw",
        paddingRight: "10px",
        cursor: "pointer"
    },
    UlHeadline: {
        textAlign: "center"
    }
  }
  