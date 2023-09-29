import React from 'react';
import heart from '../images/heart-title.jpg';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto'
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    imageHeart: {
        width: '10vw',
        height: 'auto'
    },
    flippedImageHeart: {
        width: '10vw',
        height: 'auto',
        transform: 'scaleX(-1)'
    },
    h1: {
        fontFamily: 'Protomo, sans-serif',
        fontSize: '35px',
        color: 'white',
        textShadow: '3px 3px 3px rgba(255,33,156,0.9), -3px -3px 3px rgba(255,33,156,0.9), 3px -3px 3px rgba(255,33,156,0.9), -3px 3px 3px rgba(255,33,156,0.9)',
        textAlign: 'center',
        margin: '0 45px',
    },
    subTitle: {
        fontFamily: 'dogica, sans-serif',
        fontSize: '13px',
        color: 'white',
        textShadow: '2px 2px 2px rgba(255,33,156,0.7), -2px -2px 2px rgba(255,33,156,0.7), 2px -2px 2px rgba(255,33,156,0.7), -2px 2px 2px rgba(255,33,156,0.7)',
        textAlign: 'center',
        margin: '10px 45px',
    }
};

export default function Title() {
    return (
        <div id="title" style={styles.container}>
            <div style={styles.header}>
                <img src={heart} alt="heart" style={styles.imageHeart} />
                <h1 style={styles.h1}>REYNA AGUIRRE OKAMUNE</h1>
                <img src={heart} alt="flipped heart" style={styles.flippedImageHeart} />
            </div>
            <div style={styles.subTitle}>
                aspiring software engineer
            </div>
        </div>
    );
}
