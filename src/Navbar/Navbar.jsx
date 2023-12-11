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
      <div className="navBar">
        <div className="syvar-logo">
          <img src={logo} alt="" />
        </div>

        <div className="header">
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="button"
          >
            <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
          </div>
        </div>

        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </div>
    </>
  );
}
