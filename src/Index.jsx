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

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to right, aquamarine, soft-aqua, aquamarine)', 
        padding: '2%', // A bit of padding for mobile
    },
    centerElement: {
        width: '100%',
        maxWidth: '1200px', // Maximum width for larger screens
        padding: '1%', // Inner spacing
        boxSizing: 'border-box',
        opacity: 1,
        transition: 'opacity 0.5s',
    },
    hidden: {
        opacity: 0,
    }
};

function Index() {
    return (
        <div style={styles.container}>
            <Nav />

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className={isVisible ? '' : 'hidden'} style={styles.centerElement}>
                    <Reyna />
                </div>
                <div className={isVisible ? '' : 'hidden'} style={styles.centerElement}>
                    <About />
                </div>
                <div className={isVisible ? '' : 'hidden'} style={styles.centerElement}>
                    <Currents />
                </div>
                <div className={isVisible ? '' : 'hidden'} style={styles.centerElement}>
                    <Skills />
                </div>
                <div className={isVisible ? '' : 'hidden'} style={styles.centerElement}>
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default Index;