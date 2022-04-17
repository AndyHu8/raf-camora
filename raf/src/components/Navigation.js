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
          <div onClick={OpenWiki}><LanguageIcon sx={{ fontSize: 35 }}/></div>
          <div onClick={OpenCorbo}><ShoppingCartIcon sx={{ fontSize: 35 }}/></div>
        </div>
      </div>
      </>
    );
  }
  
  const classes = {
      container: {
          height: 80,
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 15,
          paddingRight: 15,
          top: 0,
          left: 0,
          right: 0,
          position: "fixed",
          lineHeight: "10%",
          zIndex: 101,
          borderBottom: "1px solid black"
      },
      raf: {
        fontSize: 50,
        fontFamily: "'Merriweather', serif",
      },
      IconsRight: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }
  }
  