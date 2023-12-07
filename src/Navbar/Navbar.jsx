"use client";
// import styles from './style.module.scss'
import "./navbar.scss";
import { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import { AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
// import { usePathname } from 'next/navigation';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = "about";

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
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
    </>
  );
}
