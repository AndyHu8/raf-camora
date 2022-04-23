import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import "./Sidebar.css"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
      <BrowserRouter>
      {!isOpen ?
          (<button className="buttonOpen" onClick={() => setIsOpen(!isOpen)}><MenuIcon sx={{ fontSize: "calc(1.2rem + 1vw)" }}/>MENÜ</button>) :
          (
          <>
          <button className="buttonOpen" onClick={() => setIsOpen(!isOpen)}><MenuIcon sx={{ fontSize: "calc(1.2rem + 1vw)" }}/>MENÜ</button>
          <div className="sidebar">
            <button className="buttonClose" onClick={() => setIsOpen(!isOpen)}><CloseIcon sx={{ fontSize: "calc(1.2rem + 1vw)" }}/></button>
              <p className="para"><HashLink className="anchorTag" to="#home" smooth>HOME</HashLink></p>
              <p className="para"><HashLink className="anchorTag" to="#biografie" smooth>BIOGRAFIE</HashLink></p>
              <p className="para"><HashLink className="anchorTag" to="#alben" smooth>ALBEN</HashLink></p>
              <p className="para"><HashLink className="anchorTag" to="#quickLinks" smooth>QUICK LINKS</HashLink></p>
              <p className="para"><HashLink className="anchorTag" to="#quickLinks" smooth>SOCIAL</HashLink></p>
            </div>
          </>)
      }
      </BrowserRouter>
      </>
    );
  }
  