import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";
import {
  FaBloggerB,
  FaYoutube,
  FaTwitter,
  FaGoogle,
  FaBullhorn,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiClown, GiParrotHead } from "react-icons/gi";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Poznaj na blogu historie outsiderów, którzy żyją na ulicy.
        </p>
        <p className="footer-subscription-text">Oni tak szybko odchodzą!</p>
        <div className="x">
          <FaBloggerB />
          &nbsp;&nbsp;
          <Link
            className="icon-link"
            to="//parodystamichal.blogspot.com"
            target="_blank"
            aria-label="link"
            rel="noopener noreferrer"
          >
            Blog
          </Link>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>
              Kontakt <GiParrotHead className="parrot" />
            </h2>
            <Link
              className="icon-link"
              to=""
              target="_blank"
              aria-label="poczta"
              rel="noopener noreferrer"
            >
              <MdEmail />
              &nbsp;&nbsp;
              {<a href="mailto:mparodysta@gmail.com">mparodysta@gmail.com</a>}
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <GiClown className="navbar-icon" />
            </Link>
          </div>
          <small className="website-rights">Radomski Makłowicz 2020 - {new Date().getFullYear()}.</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="//www.youtube.com/channel/UCaljb6wRVUbFQiILO4xyjRw"
              target="_blank"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="//twitter.com/Micha92789947"
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="//google.com"
              target="_blank"
              aria-label="Google"
              rel="noopener noreferrer"
            >
              <FaGoogle />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
