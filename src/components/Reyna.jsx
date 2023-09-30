import React from 'react';
import heart from '../images/heart-title.jpg';

export default function Reyna() {
    const isMobile = window.innerWidth <= 768;

    const mobileStyles = {
        h1: {
            fontSize: '20px',
            marginTop: '30px',
        },
        imageStyle: {
            width: '60px',
        },
        flippedImageStyle: {
            width: '60px',
            transform: 'scaleX(-1)',
        }
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
        },
        header: {
            display: 'flex',
            
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0%'  // Added gap for spacing
        },
        h1: {
            fontFamily: 'Protomo, sans-serif',
            fontSize: '30px',
            color: 'white',
            textShadow: `
                3px 3px 3px rgba(255,33,156,0.9), 
                -3px -3px 3px rgba(255,33,156,0.9), 
                3px -3px 3px rgba(255,33,156,0.9), 
                -3px 3px 3px rgba(255,33,156,0.9)
            `,
            textAlign: 'center',
            marginTop: '60px',
        },
        heartContainer: {  // Added this container to hold hearts on the sides
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
           
        },
        imageStyle: {
            width: '110px',
            height: 'auto',
            paddingRight: '7%',
            height: 'auto',
        },
        flippedImageStyle: {
            width: '110px',
            height: 'auto',
            paddingRight: '7%',
            transform: 'scaleX(-1)',
        },
        textInfo: {
            fontFamily: 'dogica, sans-serif',
            fontSize: '12.25px',
            color: 'white',
            textShadow: '2px 2px 2px rgba(277,0,137,0.6), -2px -2px 2px rgba(277,0,137,0.6), 2px -2px 2px rgba(277,0,137,0.6), -2px 2px 2px rgba(277,0,137,0.6)',
            marginTop: '10px'
        },
        '@media (max-width: 768px)': {
            container: {
                padding: '5%',
            },
            imageFrame: {
                width: '5%'
            },
            textInfo: {
                fontSize: '10px'
            }
        }
    };

    return (
        <div id="reyna" style={styles.container}>
            <div style={styles.header}>
                <img src={heart} alt="heart" style={isMobile ? mobileStyles.imageStyle : styles.imageStyle} />
                <h1 style={isMobile ? mobileStyles.h1 : styles.h1}>REYNA AGUIRRE OKAMUNE</h1>
                <img src={heart} alt="heart" style={isMobile ? mobileStyles.flippedImageStyle : styles.flippedImageStyle} />
            </div>
            <p style={styles.textInfo}>aspiring software engineer</p>
        </div>
    );
}
