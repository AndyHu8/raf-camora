import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./QuickLinks.css"

export default function QuickLinks() {
  
    return (
    <div className='containerQuickLinks' id="quickLinks">
        <div className='divQuickLinks'>
            <p className='UIHeadline'>QUICK LINKS</p>
            <ul className='quickLinksDiv'>
                <li className='listElement' onClick={() => {window.open("https://hulongofficial.de/", "_blank")}}>Entwickelt von Hulong RR</li>
            </ul>
        </div>
        <div className='divSocial'>
            <p className='UIHeadline'>SOCIAL</p>
            <ul className='socialDiv'>
                <li className='socialElement' onClick={() => {window.open("https://facebook.com/RAFCamora.official", "_blank")}}><FacebookIcon sx={{ fontSize: "calc(1.5rem + 1vw)" }}/></li>
                <li className='socialElement' onClick={() => {window.open("https://www.instagram.com/raf_camora", "_blank")}}><InstagramIcon sx={{ fontSize: "calc(1.5rem + 1vw)" }}/></li>
            </ul>
        </div>
    </div>
    );
  }
  