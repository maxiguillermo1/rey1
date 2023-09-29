import React from 'react';
import heart from '../images/heart-title.jpg';

export default function Reyna() {
    const styles = {
        container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: '10%',
          textAlign: 'center',
        },
        header: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '75px',
        },
        image: {
            
          width: '15%',
          height: 'auto',
          objectFit: 'cover',
        },
        h1: {
          fontFamily: 'Protomo, sans-serif',
          fontSize: '30px',
          color: 'white',
          textShadow: '3px 3px 3px rgba(277,0,137,0.7), -3px -3px 3px rgba(277,0,137,0.7), 3px -3px 3px rgba(277,0,137,0.7), -3px 3px 3px rgba(277,0,137,0.7)',
          paddingLeft: '15px',
          paddingRight: '15px',
          marginTop: '50px',
        },
        reversedImage: {
          
          width: '15%',
          height: 'auto',
          objectFit: 'cover',
          transform: 'scaleX(-1)',
        },
        text: {
            fontFamily: 'dogica, sans-serif',
            fontSize: '12px',
            color: 'white',
            marginTop: '-65px', // Reduced margin to make it closer
            paddingBottom: '200px',
            textShadow: `
              2px 2px 2px rgba(277,0,137,0.6), 
              -2px -2px 2px rgba(277,0,137,0.6), 
              2px -2px 2px rgba(277,0,137,0.6), 
              -2px 2px 2px rgba(277,0,137,0.6)
            `,
          },
        };
      
      
      
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <img
            src={heart}
            alt="heart"
            style={styles.image}
          />
          <h1 style={styles.h1}>
            REYNA AGUIRRE OKAMUNE
          </h1>
          <img
            src={heart}
            alt="heart"
            style={styles.reversedImage}
          />
        </div>
        <p style={styles.text}>
          aspiring software engineer
        </p>
      </div>
    );
  }


