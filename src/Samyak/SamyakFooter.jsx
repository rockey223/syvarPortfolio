import { React, useRef, useEffect, useState } from "react";
import "./footer.scss";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import FramerMagnetic from "./framer";
import PrashantButton from "./PrashantButton";
import useAutosizeTextArea from "./useAutosizeTextArea.jsx";

function SamyakFooter() {
  const [showForm, setShowForm] = useState(false);
  const isSmallScreen = window.innerWidth < 821;

  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress) => {
    const width = window.innerWidth * 0.9;
    path.current.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  function handleRightButton() {
    setShowForm(true);
  }
  // const controls = useAnimationControls();
  const [TransformX, setTransformX] = useState("0");
  function handleMouseEnter() {
    setTransformX("50px");
    // controls.start({
    //   x: "0px",
    // });
  }

  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // const handleMouseOver = (e) => {
  //   const x = e.pageX - e.target.offsetLeft;
  //   const y = e.pageY - e.target.offsetTop;
  //   setPosition({ x, y });
  // };

  // useEffect(() => {
  //   console.log(`x: ${position.x}, y: ${position.y}`);
  // }, [position]);

  const [mPosition, setmPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     setmPosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };
  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const [isHovered, setIsHovered] = useState(false);

  // const MouseVariants = {
  //   default: {
  //     x: mPosition.x - 16,
  //     y: mPosition.y - 16,
  //   },
  //   button: {
  //     backgroundColor: "yellow",
  //     x: mPosition.x - 150,
  //     y: mPosition.y - 150,
  //     height: 300,
  //     width: 300,
  //     mixBlendMode: "difference",
  //   },
  // };

  const [value, setValue] = useState("");
  const textAreaRef = useRef(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt) => {
    const inputValue = evt.target.value;

    if (inputValue.length <= 300) {
      setValue(inputValue);
    }
  };

  return (
    <div className="syk-footer-main-container">
      {/* <motion.div
        className="syk-cursor"
        variants={MouseVariants}
        animate={cursorVariant}
      /> */}
      <div className="syk-footer-content">
        <div className="syk-footer-title">Got a project?</div>

        <div className="syk-footer-string-line">
          <div
            onMouseEnter={() => {
              manageMouseEnter();
            }}
            onMouseMove={(e) => {
              manageMouseMove(e);
            }}
            onMouseLeave={() => {
              manageMouseLeave();
            }}
            className="syk-box"
          ></div>
          <svg>
            <path ref={path}></path>
          </svg>
        </div>

        <div className="syk-footer-mid-section">
          <div className="syk-footer-left-section">
            <div className="syk-footer-left-top">
              <div className="syk-footer-text">
                <motion.div
                  className="text-only-number"
                  whileHover={{ scale: 1.2, originX: 0 }}
                >
                  +977 9843636520
                </motion.div>
              </div>
              <motion.div className="syk-footer-text">
                <motion.div
                  className="text-only-mail"
                  whileHover={{ scale: 1.2, originX: 0 }}
                >
                  info@syvartechnology.com.np
                </motion.div>
              </motion.div>
            </div>
            {!isSmallScreen && (
              <div className="syk-footer-left-bottom">
                <FramerMagnetic>
                  <FaFacebookF />
                </FramerMagnetic>
                <FramerMagnetic>
                  <RiInstagramFill />
                </FramerMagnetic>
                <FramerMagnetic>
                  <FaLinkedinIn />
                </FramerMagnetic>
              </div>
            )}
          </div>
          {showForm ? (
            <div
              className="syk-footer-right-form"
              // animate={{ scale: 0.9, opacity: 1, translateX: 0 }}
              // transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="syk-input-bar">
                <input type="text" placeholder="name" required></input>
              </div>
              <div className="syk-input-bar">
                <input type="email" placeholder="email" required></input>
              </div>
              <div className="syk-input-bar">
                <input type="tel" placeholder="phone" required></input>
              </div>
              <div className="syk-input-bar">
                {/* <input
                  type="text"
                  placeholder="tell us about your project"
                ></input> */}
                <textarea
                  id="about-project"
                  onChange={handleChange}
                  placeholder="tell us about your project"
                  ref={textAreaRef}
                  rows={1}
                  value={value}
                  required
                />
                <span>{value.length}/300</span>
              </div>
              <div className="syk-form-submit">
                <PrashantButton />

                {/* <RippleButton /> */}
              </div>
            </div>
          ) : (
            <motion.div
              className="syk-footer-right-section"
              initial={
                isSmallScreen ? { scale: 0, x: 100 } : { scale: 1, x: 100 }
              }
              whileInView={{ scale: 1, x: 0 }}
              transition={{ duration: 1, easeInOut }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => {
                setTransformX("0");
              }}
              whileHover={{ scale: 1.1 }}
              onClick={handleRightButton}
            >
              <AnimatePresence>
                <motion.div className="syk-footer-right-button">
                  Let's Work Together{" "}
                  <div>
                    <GoArrowRight
                      style={{
                        transform: `translateX(${TransformX})`,
                        transition: "0.5s ease-in-out",
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        <div className="syk-footer-bottom">
          {isSmallScreen && (
            <div className="syk-footer-left-bottom">
              <FramerMagnetic>
                <FaFacebookF />
              </FramerMagnetic>
              <FramerMagnetic>
                <RiInstagramFill />
              </FramerMagnetic>
              <FramerMagnetic>
                <FaLinkedinIn />
              </FramerMagnetic>
            </div>
          )}
          <div className="syk-footer-bottom-left">
            @2024, T&C Privacy policy
          </div>
          <div className="syk-footer-bottom-right">LOGOS</div>
        </div>
      </div>
    </div>
  );
}

export default SamyakFooter;
