import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
      <BrowserRouter>
      {!isOpen ?
          (<button style={classes.buttonOpen} onClick={() => setIsOpen(!isOpen)}><MenuIcon sx={{ fontSize: 35 }}/>MENÜ</button>) :
          (
          <>
          <button style={classes.buttonOpen} onClick={() => setIsOpen(!isOpen)}><MenuIcon sx={{ fontSize: 35 }}/>MENÜ</button>
          <div style={classes.sidebar}>
            <button style={classes.buttonClose} onClick={() => setIsOpen(!isOpen)}><CloseIcon sx={{ fontSize: 35 }}/></button>
              <p style={classes.para}><HashLink style={classes.anchorTag} to="#home" smooth>HOME</HashLink></p>
              <p style={classes.para}><HashLink style={classes.anchorTag} to="#biografie" smooth>BIOGRAFIE</HashLink></p>
              <p style={classes.para}><HashLink style={classes.anchorTag} to="#alben" smooth>ALBEN</HashLink></p>
              <p style={classes.para}><HashLink style={classes.anchorTag} to="#quickLinks" smooth>QUICK LINKS</HashLink></p>
              <p style={classes.para}><HashLink style={classes.anchorTag} to="#quickLinks" smooth>SOCIAL</HashLink></p>
            </div>
          </>)
      }
      </BrowserRouter>
      </>
    );
  }
  
  const classes = {
    sidebar: {
          position: "fixed",
          zIndex: 400,
          top: 0,
          left: "-250px",
          width: "250px",
          height: "100%",
          padding: "10px 20px",
          backgroundColor: "black",
          overflowY: "auto",
          //transition: "transform 2s",
          transform: "translateX(250px)",
          color: "white",
          fontFamily: "'Montserrat', sans-serif",

    },
    buttonOpen: {
      fontSize: 23,
      alignItems: "center",
      display: "flex",
      cursor: "pointer",
      fontFamily: "'Montserrat', sans-serif",
      backgroundColor: "white",
      border: "none"
    },
    buttonClose: {
      fontSize: 23,
      left: 4,
      top: 4,
      cursor: "pointer",
      border: "none",
      backgroundColor: "black",
      padding: 0,
      color: "white"
    },
    para: {
      fontSize: 22,
      marginTop: 45,
    },
    anchorTag: {
      color: "white",
      textDecoration: "none"
    }
    
  }
  