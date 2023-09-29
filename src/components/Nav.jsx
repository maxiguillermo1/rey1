import React from "react";
import { Link } from 'react-scroll';

export default function Nav() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: 'Protomo, sans-serif',
      fontSize: '23px',
      color: 'white',
      textShadow: `
        2px 2px 2px rgba(255,33,156,0.7),
        -2px -2px 2px rgba(255,33,156,0.7),
        2px -2px 2px rgba(255,33,156,0.7),
        -2px 2px 2px rgba(255,33,156,0.7)
      `
    }}
      className="flex justify-center items-center p-10">

      <ul className="flex space-x-10">
        <li><Link to="about" smooth={true} className="nav-link">ABOUT ME</Link></li>
        <li><Link to="currents" smooth={true} className="nav-link">CURRENT FAVORITES</Link></li>
        <li><Link to="skills" smooth={true} className="nav-link">SKILLS</Link></li>
        <li><Link to="contact" smooth={true} className="nav-link">CONTACT</Link></li>
      </ul>
    </nav>
  );
}
