import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import './App.css';
import About from './components/About';
import Currents from './components/Currents';
import Contact from './components/Contact';
import Nav from './components/Nav';  // Import Nav
import Projects from './components/Projects';
import Skills from './components/Skills';
import Reyna from './components/Reyna';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
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
    <div className='bg-gradient-to-r from-aquamarine via-soft-aqua to-aquamarine min-h-screen'>
    <Nav />  {/* Use Nav component */}
    
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-16"> {/* Moved the padding utilities here */}
        <div className="center-element w-full"> {/* Ensure each child takes full width */}
            <Element name="about" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
                <Reyna />
            </Element>
        </div>
        <div className="center-element w-full">
            <Element name="about" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
                <About />
            </Element>
        </div>
        <div className="center-element w-full">
            <Element name="currents" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
                <Currents />
            </Element>
        </div>
        <div className="center-element w-full">
            <Element name="skills" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
                <Skills />
            </Element>
        </div>
        <div className="center-element w-full">
            <Element name="contact" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
                <Contact />
            </Element>
          </div>
         </div>
      </div>
  );
}

export default App;
