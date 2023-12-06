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

  const MouseVariants = {
    default: {
      x: mPosition.x - 16,
      y: mPosition.y - 16,

     
    }
   
  };
  return (
    <>
    {/* <motion.div
          className="mouseCursor"
          style={{display: isHovered? 'none' : 'block'}}
          variants={MouseVariants}
          animate= 'default'
        /> */}
    
      <Hero
        mouse={mPosition}
        setIsHovered={setIsHovered}
        isHovered={isHovered}
        
      />
      
      <Services mouse={mPosition} />
    </>
  );
}

export default App;
