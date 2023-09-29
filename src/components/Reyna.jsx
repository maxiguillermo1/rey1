import React from 'react';
import heart from '../images/heart-title.jpg';
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
      width: '10%',
      height: 'auto',
      objectFit: 'cover',
    },
    h1: {
      fontFamily: 'Protomo, sans-serif',
      fontSize: '35px',
      color: 'white',
      textShadow: '3px 3px 3px rgba(277,0,137,0.7), -3px -3px 3px rgba(277,0,137,0.7), 3px -3px 3px rgba(277,0,137,0.7), -3px 3px 3px rgba(277,0,137,0.7)',
      paddingLeft: '15px',
      paddingRight: '15px',
      marginTop: '50px',
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
  
  // Media query for screens smaller than 768px (typical mobile screens)
  const mobileStyles = {
    container: {
      padding: '5%',
    },
    h1: {
      fontSize: '24px',
      marginTop: '30px',
    },
    text: {
      fontSize: '12px',
      marginTop: '5px',
      paddingBottom: '100px', // Adjust as needed for mobile
    },
  };
  
  // Combine styles for mobile and desktop
  const combinedStyles = {
    ...styles,
    '@media (max-width: 768px)': mobileStyles,
  };
  
  export { styles, combinedStyles };
  

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
