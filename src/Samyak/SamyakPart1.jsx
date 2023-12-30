import React, { useEffect, useRef, useState } from "react";
import "./syk.scss";
import image1 from "./images/images.jpeg";
import image2 from "./images/img2.jpeg";
import image3 from "./images/img3.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

function SamyakPart1() {
  const [activeTitle, setActiveTitle] = useState("strategy");

  const ref = useRef(null);
  const [currentImage, setCurrentImage] = useState("");

  const isSmallScreen = window.innerWidth < 821;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
    // offset: ["start end", "end end"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const borderProgress = useTransform(scrollYProgress, [0, 0.2], [160, 0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    if (latest < 0.5) {
      setActiveTitle("strategy");
    } else if (latest > 0.5 && latest < 0.73) {
      setActiveTitle("design");
    } else if (latest > 0.73) {
      setActiveTitle("develop");
    } else {
    }

    // console.log("Page scroll: ", latest);
    // console.log(scrollYProgress.current);
  });

  const transition = { duration: 1, ease: "easeInOut" };

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (activeTitle === "strategy") {
      setCurrentImage(image1);
    } else if (activeTitle === "design") {
      setCurrentImage(image2);
    } else {
      setCurrentImage(image3);
    }
  }, [activeTitle]);

  const renderImageContainer = () => {
    return (
      <motion.div
        key={activeTitle}
        className="syk-image-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={transition}
      >
        {currentImage && <img src={currentImage} />}
      </motion.div>
    );
  };

  return (
    <div ref={ref} className="background-scroll">
      <motion.div
        className="syk-main-container"
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
          borderRadius: borderProgress,
        }}
      >
        <div className="syk-left-side">
          <div className="syk-main-text">
            Speed up development and innovation with the product team
          </div>
          <div className="syk-strategy">
            {activeTitle === "strategy" ? (
              <>
                <div className="syk-medium-text syk-textmargin syk-blue-text">
                  Strategy
                </div>
                <motion.div
                  className="syk-small-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={transition}
                >
                  We create responsive websites and apps that look and work
                  great on computers, tablets, and mobile devices. We develop
                  rich internet applications in iOS, Android, and Windows
                </motion.div>
                {isSmallScreen && (
                  <div className="syk-right-side">
                    <motion.div
                      className="syk-image-container"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={transition}
                    >
                      {currentImage && <img src={currentImage} />}
                    </motion.div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div
                  className="syk-medium-text syk-textmargin"
                  onClick={() => setActiveTitle("strategy")}
                >
                  Strategy
                </div>
              </>
            )}

            {activeTitle === "design" ? (
              <>
                <div className="syk-medium-text syk-textmargin syk-blue-text">
                  Design
                </div>
                <motion.div
                  className="syk-small-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={transition}
                >
                  We create responsive websites and apps that look and work
                  great on computers, tablets, and mobile devices. We develop
                  rich internet applications in iOS, Android, and Windows
                </motion.div>
                {isSmallScreen && (
                  <div className="syk-right-side">
                    <motion.div
                      className="syk-image-container"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={transition}
                    >
                      {currentImage && <img src={currentImage} />}
                    </motion.div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div
                  className="syk-medium-text syk-textmargin"
                  onClick={() => setActiveTitle("design")}
                >
                  Design
                </div>
              </>
            )}
            {activeTitle === "develop" ? (
              <>
                <div className="syk-medium-text syk-textmargin syk-blue-text">
                  &lt;/Develop&gt;
                </div>
                <motion.div
                  className="syk-small-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={transition}
                >
                  We create responsive websites and apps that look and work
                  great on computers, tablets, and mobile devices. We develop
                  rich internet applications in iOS, Android, and Windows
                </motion.div>
                {isSmallScreen && (
                  <div className="syk-right-side">
                    <motion.div
                      className="syk-image-container"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={transition}
                    >
                      {currentImage && <img src={currentImage} />}
                    </motion.div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div
                  className="syk-medium-text syk-textmargin"
                  onClick={() => setActiveTitle("develop")}
                >
                  &lt;/Develop&gt;
                </div>
              </>
            )}
          </div>
        </div>
        {!isSmallScreen && (
          <div className="syk-right-side">{renderImageContainer()}</div>
        )}
      </motion.div>
    </div>
  );
}

export default SamyakPart1;
