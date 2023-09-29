import React from 'react';
import heart from '../images/heart-title.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '50px', // Adjust this value for top spacing
    paddingBottom: '200px', // Adjust this value for bottom spacing
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '10%',
    height: 'auto',
    objectFit: 'cover',
  },
  h1: {
    fontFamily: 'Protomo, sans-serif',
    fontSize: '35px',
    color: 'white',
    textShadow: '3px 3px 3px rgba(277,0,137,0.7), -3px -3px 3px rgba(277,0,137,0.7), 3px -3px 3px rgba(277,0,137,0.7), -3px 3px 3px rgba(277,0,137,0.7)',
    paddingLeft: '15px', // Adjust this value for centering
    paddingRight: '15px', // Adjust this value for centering
    marginTop: '50px',
    textAlign: 'center',
  },
  reversedImage: {
    width: '10%',
    height: 'auto',
    objectFit: 'cover',
    transform: 'scaleX(-1)',
  },
  text: {
    fontFamily: 'dogica, sans-serif',
    fontSize: '13px',
    color: 'white',
    marginTop: '10px',
    textShadow: `
      2px 2px 2px rgba(277,0,137,0.6), 
      -2px -2px 2px rgba(277,0,137,0.6), 
      2px -2px 2px rgba(277,0,137,0.6), 
      -2px 2px 2px rgba(277,0,137,0.6)
    `,
    textAlign: 'center',
  },
};

function Reyna() {
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

export default Reyna;
