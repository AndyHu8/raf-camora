import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function SrollToTop() {
  
    return (
      <div style={classes.button} onClick={TopFunction} id="myBtn">
        <ArrowUpwardIcon sx={{ fontSize: 35 }}/>
      </div>
    );
  }

  window.onscroll = function() {ScrollFunction()};
    var mybutton = document.getElementById("myBtn");
  
    const ScrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }

    const TopFunction = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        //document.body.scrollTop = 0;
        //document.documentElement.scrollTop = 0;
      }
  
  const classes = {
    button: {
        display: "block",
        position: "fixed",
        bottom: 20,
        right: 30,
        zIndex: 99,
        border: "1px solid white",
        outline: "none",
        backgroundColor: "black",
        color: "white",
        cursor: "pointer",
        padding: 8,
        borderRadius: 4
    }
  }
  