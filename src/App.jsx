import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, Element } from 'react-scroll';
import './App.css';
import About from './components/About';
import Currents from './components/Currents';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';

import purpleStar from './images/purple-star.jpg';
import heart from './images/heart-title.jpg';

// Define your mobile styles
const mobileStyles = {
  // Adjust font sizes
  fontSize: '20px',

  // Reduce padding and margins
  padding: '10px',
  margin: '5px',

  // Adjust image size
  width: '20%',
  height: 'auto',

  // Any other mobile-specific styles
};
function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // visibility threshold
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const target = document.querySelector('#aboutMe');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    
    <div className='bg-gradient-to-r from-aquamarine via-soft-aqua to-aquamarine min-h-screen px-4 md:px-8 lg:px-16 bg-gradient-mobile'>

      <Nav /> {/* Include the Nav component */}
      
      <div className="flex flex-col items-center p-4">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '200px', paddingBottom: '5px' }}>
          <img
            src={heart}
            alt="heart"
            style={{
              width: '10%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
          <h1
            style={{
              fontFamily: 'Protomo, sans-serif',
              fontSize: '30px',
              color: 'white',
              textShadow: '3px 3px 3px rgba(277,0,137,0.7), -3px -3px 3px rgba(277,0,137,0.7), 3px -3px 3px rgba(277,0,137,0.7), -3px 3px 3px rgba(277,0,137,0.7)',
              paddingLeft: '15px', // Adjust this value for centering
              paddingRight: '15px', // Adjust this value for centering
              marginTop: '50px',
            }}
          >
            REYNA AGUIRRE OKAMUNE
          </h1>
          <img
            src={heart}
            alt="heart"
            style={{
              width: '10%',
              height: 'auto',
              objectFit: 'cover',
              transform: 'scaleX(-1)',
            }}
          />
        </div>

        <p style={{
          fontFamily: 'dogica, sans-serif',
          fontSize: '13px',
          color: 'white',
          marginTop: '10px',
          paddingBottom: '200px',
          textShadow: `
          2px 2px 2px rgba(277,0,137,0.6), 
          -2px -2px 2px rgba(277,0,137,0.6), 
          2px -2px 2px rgba(277,0,137,0.6), 
          -2px 2px 2px rgba(277,0,137,0.6)
        `,
        }}>
          aspiring software engineer
        </p>

        <Element name="title" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
          <About />
        </Element>

        <Element name="about" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
          <About />
        </Element>
        
        <Element name="currents" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
          <Currents />
        </Element>

        <Element name="skills" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
          <Skills />
        </Element>

        <Element name="contact" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
          <Contact />
        </Element>
      </div>
    </div>
  );
}

export default App;
