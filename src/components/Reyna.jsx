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
            width: '100%',
        },
        header: {
            display: 'flex',
            
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6%'  // Added gap for spacing
        },
        h1: {
            fontFamily: 'Protomo, sans-serif',
            fontSize: '35px',
            color: 'white',
            textShadow: `
                3px 3px 3px rgba(255,33,156,0.9), 
                -3px -3px 3px rgba(255,33,156,0.9), 
                3px -3px 3px rgba(255,33,156,0.9), 
                -3px 3px 3px rgba(255,33,156,0.9)
            `,
            textAlign: 'center',
            marginTop: '100px',
        },
        heartContainer: {  // Added this container to hold hearts on the sides
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
           
        },
        imageStyle: {
            width: '11%',
            height: 'auto',
        },
        flippedImageStyle: {
            width: '11%',
            height: 'auto',
            transform: 'scaleX(-1)',
        },
        textInfo: {
            fontFamily: 'dogica, sans-serif',
            fontSize: '11px',
            color: 'white',
            textShadow: '2px 2px 2px rgba(277,0,137,0.6), -2px -2px 2px rgba(277,0,137,0.6), 2px -2px 2px rgba(277,0,137,0.6), -2px 2px 2px rgba(277,0,137,0.6)',
            marginTop: '10px'
        }
    };

    return (
        <div id="reyna" style={styles.container}>
            <div style={styles.header}>
                <img src={heart} alt="heart" style={styles.imageStyle} />
                <h1 style={styles.h1}>REYNA AGUIRRE OKAMUNE</h1>
                <img src={heart} alt="heart" style={styles.flippedImageStyle} />
            </div>
            <p style={styles.textInfo}>aspiring software engineer</p>
        </div>
    );
}
