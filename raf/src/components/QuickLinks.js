import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function QuickLinks() {
  
    return (
      <div style={classes.containerOuter} id="quickLinks">
        <div style={classes.container}>
        <div>
            <p style={classes.UlHeadline}>QUICK LINKS</p>
            <ul>
                <li style={classes.listElement}>Impressum</li>
                <li style={classes.listElement}>Support</li>
                <li style={classes.listElement} onClick={() => {window.open("https://hulongofficial.de/", "_blank")}}>Creator</li>
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
        padding: 25,
        backgroundColor: "black",
        overflowX: "hidden"
    },
    container: {
          height: "250px",
          display: "flex",
          width: "100%",
          backgroundColor: "black",
          fontSize: 25,
          fontFamily: "'Montserrat', sans-serif",
          lineHeight: "35px",
          color: "white",
          justifyContent: "space-between",
    },
    listElement: {
        listStyle: "none",
        textDecoration: "none",
        fontSize: 20,
        cursor: "pointer"
    },
    socialUl: {
        display: "flex"
    },
    socialElement: {
        listStyle: "none",
        textDecoration: "none",
        fontSize: 20,
        paddingRight: 10,
        cursor: "pointer"
    },
    UlHeadline: {
        textAlign: "center"
    }
  }
  