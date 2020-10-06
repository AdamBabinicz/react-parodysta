import React from "react";
import Chef from "../images/1-svg.svg";
import { Link } from "react-router-dom";
import "./css/Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-info">
          <img src={Chef} alt="..." />
          <h1>Witam, kłania się ...</h1>
          <p className="text">
            <i className="fa fa-quote-left"></i> ... vel Makłowicz
          </p>
          <Link to="/services">Więcej</Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
