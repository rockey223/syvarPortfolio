import React, { useState } from "react";
import "./hero.scss";
import { motion } from "framer-motion";
const Hero = ({ mouse, isHovered, setIsHovered, size }) => {
  // const [isHovered, setIsHovered] = useState(false);
  // const { x, y } = MousePosition();

  return (
    <div className="main">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${mouse.x - 20}px ${mouse.y - 16}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          A visual designer - with skills that haven't been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className="body">
        <p>
          I'm a <span>selectively skilled</span> product designer with strong
          focus on producing high quality & impactful digital experience.
        </p>
      </div>
    </div>
  );
};

export default Hero;
