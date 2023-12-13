import React, { useState } from 'react'
// import styles from './style.module.scss';
import './nav.scss';
import { motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';

import { menuSlide } from '../anim';
import NavLink from './Link/NavLink';
import Curve from './Curve/Curve';
import Footer from './Footer/NavFooter';
import { useParams } from 'react-router-dom';

const navItems = [
  {
    title: "Home",
    path: "home",
  },
  {
    title: "Work",
    path: "services",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
]

export default function Nav() {

  const pathname = 'about';
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className='rock-menu'>
       <div className='rock-body'>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className='rock-nav'>
                    {/* <div className='header'>
                        <p>Navigation</p>
                    </div> */}
                    {
                      navItems.map( (data, index) => {
                        return <NavLink key={index} data={{...data, index}} isActive={selectedIndicator == data.path} setSelectedIndicator={setSelectedIndicator}></NavLink>
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}