import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";
import { GiClown } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo">
          Radomski parodysta
          <span className="clown">
            <GiClown />
          </span>
        </Link>
        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Filmy</Link>
          </li>
          <li>
            <Link to="/about">O mnie</Link>
          </li>
          <li>
            <Link to="/slider">Foto</Link>
          </li>
          <li>
            <Link to="/video">Pożegnanie</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
