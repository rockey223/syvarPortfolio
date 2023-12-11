// import styles from './style.module.scss';
import './link.scss';
// import Link from 'next/link';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';

export default function NavLink({data, isActive, setSelectedIndicator}) {
  
    const { title, path, index} = data;
  
    return (
      <motion.div className='link' onMouseEnter={() => {setSelectedIndicator(path)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
        <motion.div variants={scale} animate={isActive ? "open" : "closed"} className='indicator'></motion.div>
        {/* <NavLink to={path}>{title}</NavLink> */}
        <Link 
      // activeClass="active" 
      to={path}
      spy={true} 
      smooth={true} 
      offset={-120} 
      duration={500} 
      // onSetActive={handleSetActive}
    >
      {title}
    </Link>
        {/* {title} */}
      </motion.div>
    )
  }