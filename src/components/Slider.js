import React, { useState } from "react";
import "./css/Slider.css";
import ImgComp from "./ImgComp";
import i1 from "../images/mi1.jpg";
import i2 from "../images/mi2.jpg";
import i3 from "../images/mi3.jpg";
import i4 from "../images/mi4.jpg";
import i5 from "../images/mi5.jpg";
import i6 from "../images/mi6.jpg";
import i7 from "../images/mi7.jpg";
import i8 from "../images/20-1.jpg";
import i9 from "../images/21-1.jpg";
import i10 from "../images/mi11.jpg";
import i11 from "../images/mi-15.jpg";
import i12 from "../images/mi-14.jpg";
import i13 from "../images/17-2.jpg";
import i14 from "../images/18-2.jpg";
import i15 from "../images/23a.jpg";
import i16 from "../images/24a.jpg";

function Slider() {
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
    <ImgComp src={i6} />,
    <ImgComp src={i7} />,
    <ImgComp src={i8} />,
    <ImgComp src={i9} />,
    <ImgComp src={i10} />,
    <ImgComp src={i11} />,
    <ImgComp src={i12} />,
    <ImgComp src={i13} />,
    <ImgComp src={i14} />,
    <ImgComp src={i15} />,
    <ImgComp src={i16} />,
  ];

  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <>
      <h3 className="cont">Foto</h3>
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
        <button id="goLeft" className="btn" onClick={goLeft}>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button id="goRight" className="btn" onClick={goRight}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
}

export default Slider;
