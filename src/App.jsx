import React, { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';
import './App.css';
import About from './components/About';
import Currents from './components/Currents';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Title from './components/Title';  // <- Import the new Title component

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
    <div className='bg-gradient-to-r from-aquamarine via-soft-aqua to-aquamarine min-h-screen px-4 md:px-8 lg:px-16'>
      <Nav />
      <Title />
      <About />
      <Currents />
      <Contact />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
