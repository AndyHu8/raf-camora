import Kachel from "./Kachel";

export default function KachelFlexbox() {
  
    return (
      <div style={classes.container}>
          <Kachel headline="Zukunft 1 + 2" year="2021" albumLink="https://open.spotify.com/album/2cRu6Q7AwQbk0Muivz92Qp?si=9NdyoBABRWiv2l8-oqa_JA"/>
          <Kachel headline="Zukunft" year="2021" albumLink="https://open.spotify.com/album/0qLHtTHjyNgq9WSymtINK6?si=MDp_i98fT2Oo_G7xEZWIFw"/>
          <Kachel headline="ZENIT RR" year="2020" albumLink="https://open.spotify.com/album/2XdEwWWUpWnWhcnaXAPrDf?si=1eUDjEUqSo21ev3mTUfwAg"/>
          <Kachel headline="ZENIT" year="2019" albumLink="https://open.spotify.com/album/3Fk5IcqWhA5DknM1ePJ2YC?si=TS820moSQfi6b5LBZuHYjA"/>

          <Kachel headline="Palmen aus Plastik 2" year="2018" albumLink="https://open.spotify.com/album/593hMJS0UPItZBWSWPX1Qb?si=iQX-UVl3Smi9LdAY_o8jlg"/>

          <Kachel headline="Anthrazit RR" year="2017" albumLink="https://open.spotify.com/album/0ztPSV8oysTBLHSOtHkItM?si=87skBYNXSVC7bJe4s5yOmw"/>
          <Kachel headline="Schwarze Materie II" year="2017" albumLink="https://open.spotify.com/album/6eHBpKPahYrKbMZA6oR9Np?si=bfXzxDWVRsOWUfbmA0rLyw"/>
          <Kachel headline="Anthrazit" year="2017" albumLink="https://open.spotify.com/album/15RtpCAMdQBuJV7cIwztLC?si=6gHxMStmRLiS_ckne9SnkQ"/>

          <Kachel headline="Tannen aus Plastik" year="2016" albumLink="https://open.spotify.com/album/5wK398nrEK1eSnWCTsfvim?si=YQQ8b41gS5Co7uyb2IDmrQ"/>
          <Kachel headline="Palmen aus Plastik" year="2016" albumLink="https://open.spotify.com/album/1L8yTtYjg4JhfN7Aa6bqmN?si=vvg3OpHfRP2MCFb7hZ6m9w"/>

          <Kachel headline="Ghøst" year="2016" albumLink="https://open.spotify.com/album/1LlWXu5aKyrGcGNGfS7v0G?si=YX9vGjZyTOaAYLZLleTZxw"/>
          <Kachel headline="Therapie nach dem Tod" year="2012" albumLink="https://open.spotify.com/album/0OqCKXcXULAdcqrGawnOPr?si=GST7SGAuSl-xZGEPYocR5Q"/>
          <Kachel headline="Inedit 2003-2010" year="2010" albumLink="https://open.spotify.com/album/04QyIhEirwmX4fczNybpU4?si=uB0aw48HShGLI7pjuP39_w"/>    
          <Kachel headline="Therapie nach dem Album" year="2010" albumLink="https://open.spotify.com/album/5YVEV0FDa4m4OOgKuy3uzg?si=grqxQArGT9K9Gd5cCKwmyQ"/>
          <Kachel headline="Artkore" year="2010" albumLink="https://open.spotify.com/album/39Lnk2F7wx3VYO7TFbYsgK?si=zMNwJAFFRbuafWZgQLML2w"/>
          <Kachel headline="Nächster Stopp Zukunft" year="2009" albumLink="https://open.spotify.com/album/01SlNE5tmetmmODm5DDdlA?si=JnlVzCDdTBSDtYGNznKDlg"/>
          <Kachel headline="Therapie vor dem Album" year="2008" albumLink="https://open.spotify.com/album/1L2OX1wS9zUppyCvh5YRQc?si=iC-ptYF4TSOpdYJ-9JNmQA"/>
      </div>
    );
  }
  
  const classes = {
    container: {
          height: "100%",
          padding: 30,
          backgroundColor: "white",
          display: "flex",
          flexWrap: "wrap",
          rowGap: 30,
          columnGap: 30,
          alignItems: "center",
          justifyContent: "space-between"
    }
  }
  