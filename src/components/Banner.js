import React, { useState } from "react";
import Chef from "../images/1-svg.svg";
import { Link } from "react-router-dom";
import "./css/Banner.css";
import Popup from "./Popup";
import web from "../images/22a.jpg";

const Banner = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="banner">
        <div className="banner-info">
          <img src={Chef} alt="..." />
          <h1>Witam, kłania się ...</h1>
          <p className="text">
            <i className="fa fa-quote-left"></i> ... vel Makłowicz
          </p>
          <Link onClick={() => setButtonPopup(true)}>Więcej</Link>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>
            „Jak się uderzy w stół, to nożyce się otworzą i to piwo co się
            wylało trzeba wypić.“
          </h3>
          <br />
          <img src={web} /> <br />
          <p>Andrzej Lepper ✝</p> <br />
          <em>https://quotepark.com/pl/autorzy/andrzej-lepper</em>
        </Popup>
      </div>
    </>
  );
};

export default Banner;
