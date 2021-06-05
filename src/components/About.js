import React from "react";
import "./css/About.css";
// import styled from "styled-components";
import Fot1 from "../images/2.jpg";
import Fot2 from "../images/dyzma1.jpg";
import Fot3 from "../images/maklo1.jpg";
import Fot4 from "../images/vabank1.jpg";
import Fot5 from "../images/konop1.jpg";
import Fot6 from "../images/ck1.jpg";
import Fot7 from "../images/zmien1.jpg";

const About = () => {
  return (
    <>
      <div className="cont">
        <h3 className="dis">O mnie</h3>
        <div className="grid">
          <p>
            <span className="abs">
              <img src={Fot1} alt="..." />
              <em>"Świat według Kiepskich 1990 - 2020"</em>
            </span>
            <mark>M</mark>am na imię Michał, jestem znany jako "radomski
            Makłowicz".
            <br /> Z zawodu i wykształcenia jestem kucharzem - kelnerem. Moim
            hobby jest rysowanie ołówkiem portretów znanych piosenkarzy, aktorów
            i znajomych oraz mojej rodziny. <br />
            <br />
            <span className="abs">
              <img src={Fot6} alt="..." />
              <em>"C.K. Dezerterzy 1985"</em>
            </span>
            <br />
            <mark>P</mark>asjami oglądam również polskie seriale i filmy,
            głównie z czasów PRL-u.
            <br />
            Moje ulubione gatunki filmowe to komedie i kryminały. Lubię filmy
            wyraziste z silnie zarysowanymi bohaterami.
            <br />
            <br />
            <span className="x abs">
              <img src={Fot2} alt="..." />
              <em>Kariera Nikodema Dyzmy 1980</em>
            </span>
          </p>
          <p>
            <span className="abs">
              <img src={Fot3} alt="..." />
              <em>"Podróże kulinarne R. Makłowicza 1998 - 2017"</em>
            </span>
            <mark>M</mark>arzę o tym, aby wystąpić w filmie jako statysta,
            epizodysta lub na drugim planie. Z uwagą obserwowałem koleje losu
            Henryka Gołębiewskiego, wspaniałego aktora - naturszczyka. Na jego
            przykładzie widzę, że wszystko w życiu jest możliwe i nie należy
            tracić nadziei.
            <br /> Od 2018 roku prowadzę bloga, na którego serdecznie zapraszam.
            <br />
            <br />
            <span className="abs">
              <img src={Fot5} alt="..." />
              <em>"Konopielka 1980"</em>
            </span>
          </p>
          <p>
            <mark>Z</mark>apamiętałem teksty z najzabawniejszych scen z wielu
            polskich filmów: "C.K. Dezerterzy", "Uprowadzenie Agaty", "Kariera
            Nikodema Dyzmy", "Kingsajz", "Vabank" itd. ( lista jest bardzo długa
            ).
            <br />
            <br />
            <span className="abs">
              <img src={Fot4} alt="..." />
              <em>"Vabank 1981"</em>
            </span>
            <mark>U</mark>wielbiam parodiować polityków i celebrytów. Wśród
            gwiazd, które chętnie naśladuję, są: Robert Makłowicz, Adam Michnik,
            Andrzej Lepper(†) czy Lech Wałęsa. Parodiuję także role: Ferdynanda
            Kiepskiego, (za przeproszeniem) Mariana Paździocha(†), czy Arnolda
            Boczka(†).
          </p>
          <p>
            <mark>W</mark> swoich skeczach, które powstają spontanicznie, nie
            tylko dokładnie naśladuję głos, cytuję charakterystyczne powiedzonka
            i odtwarzam szczegółowe cechy granych postaci. Staram się również
            przekazać ich portret psychologiczny.
            <br /> Naturalnie parodiuję również moich bliskich, znajomych i
            sąsiadów oraz większość osób, z którymi miałem kontakt.
            <br />
            <br />
            <span className="abs">
              <img src={Fot7} alt="..." />
              <em>"Zmiennicy 1986 - 1987"</em>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

// STYLED COMPONENTS STYLES
// const MainContainer = styled.div`
//   background: var(--deep-dark-blue);
//   height: 100vh;
//   h3 {
//     color: var(--dark-red);
//   }
//   p {
//     color: var(--orange);
//   }
// `;
