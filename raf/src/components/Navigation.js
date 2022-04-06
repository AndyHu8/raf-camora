import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navigation() {

  const OpenSidebar = () => {
  }

  const OpenWiki = () => {
    window.open("https://de.wikipedia.org/wiki/RAF_Camora", "_blank")
  }

  const OpenCorbo = () => {
    window.open("https://corbo-apparel.com/", "_blank")
  }
    
    return (
      <div style={classes.container}>
        <div style={classes.menu} onClick={OpenSidebar}><MenuIcon sx={{ fontSize: 35 }}/>MENÜ</div>
        <div style={classes.raf}>RAF CAMORA</div>
        <div style={classes.IconsRight}>
          <div onClick={OpenWiki}><LanguageIcon sx={{ fontSize: 35 }}/></div>
          <div onClick={OpenCorbo}><ShoppingCartIcon sx={{ fontSize: 35 }}/></div>
        </div>
      </div>
    );
  }
  
  const classes = {
      container: {
          height: "8%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          left: 10,
          right: 10,
          position: "fixed",
          borderBottom: "1px solid black",
          lineHeight: "10%"
      },
      menu: {
        fontSize: 23,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        fontFamily: "'Montserrat', sans-serif"
      },
      raf: {
        fontSize: 50,
        fontFamily: "'Zen Antique Soft', serif",  
      },
      IconsRight: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }
  }
  