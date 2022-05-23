import React from "react";
import styled from "styled-components";
import MainVideo from "../images/1.mp4";
import img from "../images/1.webp";
import img1 from "../images/ostatnie.jpg";
import { motion } from "framer-motion";
import { videoAnimations } from "../animation";
import { useScroll } from "./useScroll";

function Video() {
  const [element, controls] = useScroll();

  return (
    <Section ref={element}>
      <div className="background"></div>
      <motion.div
        className="video"
        variants={videoAnimations}
        animate={controls}
        transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
      >
        <video src={MainVideo} type="video/mp4" autoPlay loop />
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
    url(${img}) 0% 45%/ 50% no-repeat,
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
    url(${img1}) 100% 45%/ 50% no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  video {
    z-index: 10;
    width: 100vw;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    background: #000;
    video {
      margin-bottom: -0.5rem;
    }
  }
`;

export default Video;
