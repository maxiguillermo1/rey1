import React from 'react';
import heart from '../images/heart-title.jpg';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '1vh',
        height: '65vh',
        //background: 'linear-gradient(to right, #5edfff, #81ebff, #5edfff)'
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageHeart: {
        width: '10%',
        height: 'auto'
    },
    flippedImageHeart: {
        width: '10%',
        height: 'auto',
        transform: 'scaleX(-1)'  // This flips the image horizontally
    },
    h1: {
        fontFamily: 'Protomo, sans-serif',
        fontSize: '35px',
        color: 'white',
        textShadow: '3px 3px 3px rgba(255,33,156,0.9), -3px -3px 3px rgba(255,33,156,0.9), 3px -3px 3px rgba(255,33,156,0.9), -3px 3px 3px rgba(255,33,156,0.9)',
        textAlign: 'center',
        paddingTop: '75px',
        paddingLeft: '45px',
        paddingRight: '45px'
    },
    subTitle: {
        fontFamily: 'dogica, sans-serif',
        fontSize: '13px',
        color: 'white',
        textShadow: '2px 2px 2px rgba(255,33,156,0.7), -2px -2px 2px rgba(255,33,156,0.7), 2px -2px 2px rgba(255,33,156,0.7), -2px 2px 2px rgba(255,33,156,0.7)',
        paddingTop: '10px'
    }
};

export default function Title() {
    return (
        <div id="title"style={styles.container}>
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
