import "./Biografie.css"

export default function Biografie() {
  
    return (
        <>
      <div className="biografie" id="biografie">
          <div className="imgContainer"><div className="imgBio"/></div>
          <div className="sideText">
              <p className="headline">RAF CAMORA - BIOGRAFIE</p>
              Erwachsen, reflektiert und schonungslos ehrlich berichtet Raphael „RAF Camora“ Ragucci in seiner selbst geschriebenen Autobiografie, „Der Pakt“, von der unglaublichen bisherigen Reise seiner Karriere, die ihn aus einfachen Verhältnissen von West-Wien über Berlin nach Barcelona bis hin ins Ferne Tokio bringt.
              <p className="mehrErfahren" onClick={() => {window.open("https://der-pakt.com/", "_blank")}}>MEHR ERFAHREN</p>
            </div>
      </div>
      <div className="downText">RAF Camora (4. Juni 1984 in Vevey; bürgerlich Raphael Ragucci), auch bekannt als RAF 3.0, früher Raf0Mic, ist ein österreichischer Dancehall- und Hip-Hop-Musiker und Produzent aus Wien, der in Berlin lebt.</div>
      </>
    );
  }
  