import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Sidebar from './Sidebar';

export default function Navigation() {

  const OpenWiki = () => {
    window.open("https://de.wikipedia.org/wiki/RAF_Camora", "_blank")
  }

  const OpenCorbo = () => {
    window.open("https://corbo-apparel.com/", "_blank")
  }
    
    return (
      <>
      <div style={classes.container}>
        <Sidebar/>
        <div style={classes.raf}>RAF CAMORA RR</div>
        <div style={classes.IconsRight}>
          <div onClick={OpenWiki}><LanguageIcon sx={{ fontSize: "2vw" }}/></div>
          <div onClick={OpenCorbo}><ShoppingCartIcon sx={{ fontSize: "2vw" }}/></div>
        </div>
      </div>
      </>
    );
  }
  
  const classes = {
      container: {
          height: "5vw",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "1%",
          paddingRight: "1%",
          top: 0,
          left: 0,
          right: 0,
          position: "fixed",
          lineHeight: "10%",
          zIndex: 101,
      },
      raf: {
        fontSize: "2.5vw",
        fontFamily: "'Merriweather', serif",
      },
      IconsRight: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }
  }
  