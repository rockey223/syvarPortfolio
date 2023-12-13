"use client";
// import styles from './style.module.scss'
import "./navbar.scss";
import { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import { AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
// import { usePathname } from 'next/navigation';
import logo from "../assets/logo.png";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = "about";

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className="rock-navBar">
        <div className="rock-syvar-logo">
          <img src={logo} alt="" />
        </div>

        <div className="rock-header">
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="rock-button"
          >
            <div className={`rock-burger ${isActive ? "rock-burgerActive" : ""}`}></div>
          </div>
        </div>

        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </div>
    </>
  );
}
