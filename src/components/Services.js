import React from "react";
import "./css/Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="services" id="services">
          <h3 className="cont">Filmy</h3>
          <p className="sub-heading">
            Zobacz filmiki z parodiami znanych celebrytów:-
          </p>
          <div className="services-cards">
            <div className="card">
              <Link
                to="//www.youtube.com/watch?v=T5rHybh2av8&t=25s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube-play"></i>
              </Link>
              <h3>
                <i className="fa fa-quote-left"></i>
              </h3>
              <p>
                To pan w niedzielę wszedł tu jak do obory i ani be, ani me, ani
                kukuryku.
                <br /> <br />
                <span>
                  <em className="aut">
                    <b>L. Wałęsa</b>
                  </em>
                </span>
              </p>
            </div>
            <div className="card">
              <Link to="//www.youtube.com/watch?v=PBik4QfgOXo" target="_blank">
                <i className="fa fa-youtube-play"></i>
              </Link>
              <h3>
                <i className="fa fa-quote-left"></i>
              </h3>
              <p>
                Cebulka rumieni się na patelni jak dziewica przed nocą poślubną.
                <br /> <br />
                <span>
                  <em className="aut">
                    <b>R. Makłowicz</b>
                  </em>
                </span>
              </p>
            </div>
            <div className="card">
              <Link
                to="//www.youtube.com/watch?v=xZeqCILtTZo&t=65s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube-play"></i>
              </Link>
              <h3>
                <i className="fa fa-quote-left"></i>
              </h3>
              <p>
                Miała być demokracja, a tu każdy wygaduje co chce!
                <br /> <br />
                <span>
                  <em className="aut">
                    <b>A. Lepper (✝)</b>
                  </em>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
