import React from "react";
import { Link } from 'react-scroll';

const navStyles = {
  position: 'sticky',
  top: 0,
  zIndex: 1000, // Add this line to set a higher z-index'
  width: '100%',
  fontFamily: 'Protomo, sans-serif',
  fontSize: '20px',
  color: 'white',
  textShadow: `
    2px 2px 2px rgba(255,33,156,0.7),
    -2px -2px 2px rgba(255,33,156,0.7),
    2px -2px 2px rgba(255,33,156,0.7),
    -2px 2px 2px rgba(255,33,156,0.7)
  `,
  '@media (max-width: 200px)': {
    fontSize: '1px',
  },
  '@media (max-width: 768px)': {
    container: {
        padding: '5%',
    },
    imageFrame: {
        width: '5%'
    },
    textInfo: {
        fontSize: '10px'
    }
}
};


export default function Nav() {
  return (
    <nav style={navStyles} className="flex justify-center items-center p-10">
      <ul className="flex space-x-10">
        <li><Link to="aboutMe" smooth={true} className="nav-link">ABOUT ME</Link></li>
        <li><Link to="currents" smooth={true} className="nav-link">CURRENT FAVORITES</Link></li>
        <li><Link to="skills" smooth={true} className="nav-link">SKILLS</Link></li>
        <li><Link to="contact" smooth={true} className="nav-link">CONTACT</Link></li>
      </ul>
    </nav>
  );
}
