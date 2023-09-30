import React from 'react';
import heart from '../images/heart-title.jpg';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        textAlign: 'center',
    },
    heartContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        width: '10%',
        height: 'auto',
        objectFit: 'cover',
        margin: '0 15px' // Adjust spacing between heart and text
    },
    flippedImageStyle: {
        width: '10%',
        height: 'auto',
        objectFit: 'cover',
        transform: 'scaleX(-1)',
        margin: '0 15px' // Adjust spacing between heart and text
    },
    h1: {
        fontFamily: 'Protomo, sans-serif',
        fontSize: '33px',
        color: 'white',
        textShadow: '3px 3px 3px rgba(277,0,137,0.7), -3px -3px 3px rgba(277,0,137,0.7), 3px -3px 3px rgba(277,0,137,0.7), -3px 3px 3px rgba(277,0,137,0.7)',
        margin: '80px 0 10px' // Spacing above and below name
    },
    textInfo: {
        fontFamily: 'dogica, sans-serif',
        fontSize: '11px',
        color: 'white',
        textShadow: '2px 2px 2px rgba(277,0,137,0.6), -2px -2px 2px rgba(277,0,137,0.6), 2px -2px 2px rgba(277,0,137,0.6), -2px 2px 2px rgba(277,0,137,0.6)'
    },
    '@media (max-width: 768px)': {
        h1: {
            fontSize: '20px',
            margin: '25px 0'
        },
        textInfo: {
            fontSize: '10px'
        },
        imageStyle: {
            width: '20%'
        },
        flippedImageStyle: {
            width: '20%'
        }
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

export default function Reyna() {
    return (
        <div id="reyna" style={styles.container}>
            <div style={styles.heartContainer}>
                <img src={heart} alt="heart" style={styles.imageStyle} />
                <h1 style={styles.h1}>REYNA AGUIRRE OKAMUNE</h1>
                <img src={heart} alt="heart" style={styles.flippedImageStyle} />
            </div>
            <p style={styles.textInfo}>aspiring software engineer</p>
        </div>
    );
}
