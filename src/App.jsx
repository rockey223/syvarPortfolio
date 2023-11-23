import React, { useEffect, useRef, useState } from "react";

import "./App.css";
import Services from "./Services/Services";

import { motion } from "framer-motion";
function App() {
  const [mPosition, setMPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
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

  const MouseVariants = {
    default: {
      x: mPosition.x - 16,
      y: mPosition.y - 16,
      
    },
  };
  return (
    <>
      {/* <Hero /> */}
      <Services mouse={mPosition} />
      <motion.div
        className="mouseCursor"
        variants={MouseVariants}
        animate="default"
      />
    </>
  );
}

export default App;
