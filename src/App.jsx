import React, { useState, useEffect } from 'react';
import Nav from './Nav'; // Assuming you have a Nav component
import Reyna from './Reyna'; // Import your components
import About from './About';
import Currents from './Currents';
import Skills from './Skills';
import Contact from './Contact';
import { Element } from 'react-scroll'; // Assuming you're using react-scroll for scrolling

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // You can add logic to control the visibility of sections here
    // For example, when a certain event occurs or based on scroll position
    // setIsVisible(true) when you want to show the sections.
  }, []); // Add dependencies as needed

  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center p-4">
        {/* Include your sections here */}
        <Element name="about" style={{ opacity: isVisible ? 1 : 0, width: '100%' }}>
          <Reyna />
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
