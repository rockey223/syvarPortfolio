import React, { useState } from "react";
import "./hero.scss";
import { motion } from "framer-motion";
const Hero = ({ mouse, isHovered, setIsHovered }) => {
  // const [isHovered, setIsHovered] = useState(false);
  // const { x, y } = MousePosition();
  const size = isHovered ? 400 : 40;
  const none = 0;
  return (
    <div className="hero-main-container">

    <div className="main">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${mouse.x - size / 2}px ${mouse.y - size / 2}px`,
          WebkitMaskSize: `${isHovered ? size : none}px`
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        // style={{ display: isHovered ? 'block' : 'none' }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
         One of the most important pieces of the great product experience is you.
        </p>
      <p className="tagLine">
      A creative agency that craft a digital experience.
      </p>
      </motion.div>

      <div className="body">
        <p>
        Your Essence, Our Excellence: Elevating the product Experience together.
        </p>
      <p className="tagLine">
      We sculpt dreams into digital marvels.
      </p>
      </div>
    </div>
    </div>
  );
};

export default Hero;
