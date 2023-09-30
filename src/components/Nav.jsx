import React, { useState } from "react";
import { Link } from 'react-scroll';

const navStyles = {
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  width: '100%',
  fontFamily: 'Protomo, sans-serif',
  fontSize: '22.5px',
  color: 'white',
  textShadow: `
    2px 2px 2px rgba(255,33,156,0.7),
    -2px -2px 2px rgba(255,33,156,0.7),
    2px -2px 2px rgba(255,33,156,0.7),
    -2px 2px 2px rgba(255,33,156,0.7)
  `
};

const mobileStyles = {
  fontSize: '7px',
  ul: {
    flexDirection: 'column', // Stack items vertically for the dropdown
    position: 'absolute',   // Position it above everything else
    top: '50px',            // Push it down below the nav bar
    right: '10px',          // Optional: position it on the right side
    backgroundColor: '#333',// A background color to differentiate the dropdown
    padding: '10px',
    borderRadius: '5px'
  },
  li: {
    marginBottom: '10px'
  }
};

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={navStyles} className="flex justify-center items-center p-10">
      {window.innerWidth <= 768 ? (
        <>
          <i className="fas fa-bars" onClick={() => setMenuOpen(!menuOpen)}></i>
          {menuOpen && (
            <ul style={mobileStyles.ul} className="flex space-x-10 space-y-0 md:space-x-15 md:space-y-0 md:flex-row">
              <li style={mobileStyles.li}><Link to="aboutMe" smooth={true} className="nav-link" onClick={() => setMenuOpen(false)}>ABOUT ME</Link></li>
              <li style={mobileStyles.li}><Link to="currents" smooth={true} className="nav-link" onClick={() => setMenuOpen(false)}>CURRENT FAVORITES</Link></li>
              <li style={mobileStyles.li}><Link to="skills" smooth={true} className="nav-link" onClick={() => setMenuOpen(false)}>SKILLS</Link></li>
              <li style={mobileStyles.li}><Link to="contact" smooth={true} className="nav-link" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
            </ul>
          )}
        </>
      ) : (
        <ul className="flex space-x-10 space-y-0 md:space-x-15 md:space-y-0 md:flex-row">
          <li><Link to="aboutMe" smooth={true} className="nav-link">ABOUT ME</Link></li>
          <li><Link to="currents" smooth={true} className="nav-link">CURRENT FAVORITES</Link></li>
          <li><Link to="skills" smooth={true} className="nav-link">SKILLS</Link></li>
          <li><Link to="contact" smooth={true} className="nav-link">CONTACT</Link></li>
        </ul>
      )}
    </nav>
  );
}
