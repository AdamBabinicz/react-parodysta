import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/NavbarMobile.css";
import { FaBars, FaTimes, FaBullhorn } from "react-icons/fa";
// import { Button } from "./Button";
import { IconContext } from "react-icons/lib";
import { GiClown } from "react-icons/gi";

function NavbarMobile() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Radomski&nbsp;parodysta
              <span className="clown">
                <GiClown />
              </span>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Filmy
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  O&nbsp;mnie
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/slider"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Foto
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Kontakt
                </Link>
              </li>
              {/* <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      onClick={closeMobileMenu}
                    >
                      Zapisz się
                    </Button>
                  </Link>
                ) : (
                  <Link to="/sign-up" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      Zapisz się
                    </Button>
                  </Link>
                )}
              </li> */}
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default NavbarMobile;
