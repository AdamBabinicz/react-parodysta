import React from "react";

function ImgComp({ src }) {
  let imgStyles = {
    width: "100" + "%",
    maxHeight: "100" + "%",
  };
  return <img src={src} alt="..." style={imgStyles} />;
}

export default ImgComp;
