import React from "react";
import flyingPowerpuff from '../images/move-powerpuff-me.jpg';

export default function Skills() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            paddingLeft: '10%',
            paddingRight: '10%',
            overflowX: 'hidden'  // This prevents horizontal scrolling which can cause white bars.
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        h1: {
            fontFamily: 'Protomo, sans-serif',
            fontSize: '45px',
            color: 'white',
            textShadow: `
                3px 3px 3px rgba(255,33,156,0.9), 
                -3px -3px 3px rgba(255,33,156,0.9), 
                3px -3px 3px rgba(255,33,156,0.9), 
                -3px 3px 3px rgba(255,33,156,0.9)
            `,
            textAlign: 'center',
            marginBottom: '50px',
            marginRight: '20px',
        },
        image: {
            width: '100px',
            height: 'auto',
            animation: 'flying 1s infinite',
        },
        section: {
            marginBottom: '30px',
            fontFamily: 'dogica, sans-serif',
            color: 'white',
            fontSize: '13px',
            paddingLeft: '15px',
            paddingRight: '15px',
        },
        h2: {
            textShadow: `
                2px 2px 2px rgba(255,33,156,0.7), 
                -2px -2px 2px rgba(255,33,156,0.7), 
                2px -2px 2px rgba(255,33,156,0.7), 
                -2px 2px 2px rgba(255,33,156,0.7)
            `,
            paddingBottom: '20px',
        },
        ul: {
            textShadow: `
                2px 2px 2px rgba(0, 181, 195, 0.7), 
                -2px -2px 2px rgba(0, 181, 195, 0.7), 
                2px -2px 2px rgba(0, 181, 195, 0.7), 
                -2px 2px 2px rgba(0, 181, 195, 0.7)
            `,
        },
    };

    return (
      <div id="skills" style={styles.container}>
          <div style={styles.header}>
              <h1 style={styles.h1}>SKILLS</h1>
              <img src={flyingPowerpuff} alt="powerpuff girl" style={styles.image} />
          </div>

          <section style={styles.section}>
              <h2 style={styles.h2}>LANGUAGES:</h2>
              <ul style={{ ...styles.ul, fontSize: '13px' }}> {/* Adjusted font size */}
                  <li>python, C#, C++, javascript, kotlin</li>
              </ul>
          </section>

          <section style={styles.section}>
              <h2 style={styles.h2}>IDEs:</h2>
              <ul style={{ ...styles.ul, fontSize: '13.6px' }}> {/* Adjusted font size */}
                  <li>visual studio code, pycharm,</li>
                  <li>jupyter notebook, replit,</li>
                  <li>ubuntu, deepnote, android studio</li>
              </ul>
          </section>

          <section style={styles.section}>
              <h2 style={styles.h2}>CERTIFICATES:</h2>
              <ul style={{ ...styles.ul, fontSize: '11.1px' }}> {/* Adjusted font size */}
                  <li>machine learning foundations - eCornell</li>
                  <li>foundational c# - microsoft</li>
              </ul>
          </section>
      </div>
  );
}