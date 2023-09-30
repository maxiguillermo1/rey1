import React from "react";
import { Link } from 'react-scroll';

const navStyles = {
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  width: '100%',
  fontFamily: 'Protomo, sans-serif',
  fontSize: '20px',
  color: 'white',
  textShadow: `
    2px 2px 2px rgba(255,33,156,0.7),
    -2px -2px 2px rgba(255,33,156,0.7),
    2px -2px 2px rgba(255,33,156,0.7),
    -2px 2px 2px rgba(255,33,156,0.7)
  `
};

const mobileStyles = {
  fontSize: '14px',
  ul: {
    flexDirection: 'row',
    overflowX: 'auto'
  },
  li: {
    marginBottom: '0'
  }
};

export default function Nav() {
  return (
    <nav style={navStyles} className="flex justify-center items-center p-10">
      <ul style={window.innerWidth <= 768 ? mobileStyles.ul : {}} className="flex space-x-10 space-y-0 md:space-x-15 md:space-y-0 md:flex-row">
        <li style={window.innerWidth <= 768 ? mobileStyles.li : {}}><Link to="aboutMe" smooth={true} className="nav-link">ABOUT ME</Link></li>
        <li style={window.innerWidth <= 768 ? mobileStyles.li : {}}><Link to="currents" smooth={true} className="nav-link">CURRENT FAVORITES</Link></li>
        <li style={window.innerWidth <= 768 ? mobileStyles.li : {}}><Link to="skills" smooth={true} className="nav-link">SKILLS</Link></li>
        <li style={window.innerWidth <= 768 ? mobileStyles.li : {}}><Link to="contact" smooth={true} className="nav-link">CONTACT</Link></li>
      </ul>
    </nav>
  );
}
