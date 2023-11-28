import React, { useEffect, useRef, useState } from "react";

import "./App.css";
import Services from "./Services/Services";

import { motion } from "framer-motion";
import Hero from "./Hero/Hero";
function App() {
  const [mPosition, setMPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      // console.log(e.clientX);
      // console.log(e.clientY);
      setMPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;
  const MouseVariants = {
    default: {
      x: mPosition.x - 20,
      y: mPosition.y - 16,

     
    },
    hoveredHero:{
      x: mPosition.x - 20,
      y: mPosition.y - 16,
  // scale: size,

    }
  };
  return (
    <>
    <motion.div
          className="mouseCursor"
          variants={MouseVariants}
          animate= {isHovered ? 'hoveredHero' : 'default'}
        />
    
      {/* <Hero
        mouse={mPosition}
        setIsHovered={setIsHovered}
        isHovered={isHovered}
        size={size}
      /> */}
      
      <Services mouse={mPosition} />
    </>
  );
}

export default App;
