import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Sidebar from '../Sidebar/Sidebar';
import "./Navigation.css"

export default function Navigation() {

  const OpenWiki = () => {
    window.open("https://de.wikipedia.org/wiki/RAF_Camora", "_blank")
  }

  const OpenCorbo = () => {
    window.open("https://corbo-apparel.com/", "_blank")
  }
    
    return (
      <>
      <div className='container'>
        <Sidebar/>
        <div className='raf'>RAF CAMORA RR</div>
        <div className='iconsRight'>
          <div onClick={OpenWiki}><LanguageIcon sx={{ fontSize: "calc(1.5rem + 1vw)" }}/></div>
          <div onClick={OpenCorbo}><ShoppingCartIcon sx={{ fontSize: "calc(1.5rem + 1vw)" }}/></div>
        </div>
      </div>
      </>
    );
  }
  