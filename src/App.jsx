// src/App.jsx

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
import Reyna from './components/Reyna'
import purpleStar from './images/purple-star.jpg';
import heart from './images/heart-title.jpg';


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
    <div className='bg-gradient-to-r from-aquamarine via-soft-aqua to-aquamarine min-h-screen px-4 md:px-8 lg:px-16 min-h-screen'> {/* Added min-h-screen */}
      <nav style={{ 
         position: 'sticky',
         top: 0,
         zIndex: 1000,
         fontFamily: 'Protomo, sans-serif', 
         fontSize: '23px', 
         color:'white',
         textShadow:  `
         2px 2px 2px rgba(255,33,156,0.7), 
         -2px -2px 2px rgba(255,33,156,0.7), 
         2px -2px 2px rgba(255,33,156,0.7), 
         -2px 2px 2px rgba(255,33,156,0.7)
       `,
         }} 
         className="flex justify-center items-center p-10">
        {/* ... (existing nav code) */}
      </nav>

      <div className="flex flex-col items-center p-4">
        <div className="center-element"> {/* Added wrapper div */}
          <Element name="about" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
            <Reyna />
          </Element>
        </div>
        <div className="center-element"> {/* Added wrapper div */}
          <Element name="about" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
            <About />
          </Element>
        </div>
        <div className="center-element"> {/* Added wrapper div */}
          <Element name="currents" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
            <Currents />
          </Element>
        </div>
        <div className="center-element"> {/* Added wrapper div */}
          <Element name="skills" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
            <Skills />
          </Element>
        </div>
        <div className="center-element"> {/* Added wrapper div */}
          <Element name="contact" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
            <Contact />
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App;