import React, { useEffect, useRef, useState } from "react";

import "./App.css";
import Services from "./Services/Services";

import { motion } from "framer-motion";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import SamyakPart1 from "./Samyak/SamyakPart1";
import SamyakFooter from "./Samyak/SamyakFooter";

function App() {
  // const MouseVariants = {
  //   default: {
  //     x: mPosition.x - 16,
  //     y: mPosition.y - 16,
  //   },
  // };
  return (
    <>
      {/* <motion.div
          className="rock-mouseCursor"
          style={{display: isHovered? 'none' : 'block'}}
          variants={MouseVariants}
          animate= 'default'
        /> */}
      <Navbar />
      <Hero />
      <SamyakPart1 />
      <Services />
      <SamyakFooter />
    </>
  );
}

export default App;
