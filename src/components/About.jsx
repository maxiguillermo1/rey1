import React from 'react';
import powerpuffMe from '../images/powerpuff-me-2.jpg';
import heartIcon from '../images/heart-icon.jpg';
import 'font-awesome/css/font-awesome.min.css';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        padding: '10%',
        boxSizing: 'border-box',
        overflowX: 'hidden',
       
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '50px'
    },
    imageBounce: {
        width: '55px',
        height: 'auto',
        animation: 'bounce 2s infinite',
        animationTimingFunction: 'cubic-bezier(0.28, 0.84, 0.42, 1)',
        marginBottom: '20px'
    },
    h1: {
        fontFamily: 'Protomo, sans-serif',
        fontSize: '40px',
        color: 'white',
        textShadow: '3px 3px 3px rgba(255,33,156,0.9), -3px -3px 3px rgba(255,33,156,0.9), 3px -3px 3px rgba(255,33,156,0.9), -3px 3px 3px rgba(255,33,156,0.9)',
        textAlign: 'center',
    },
    infoItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },
    infoIcon: {
        width: '25px',
        height: '20px',
        animation: 'pulse 1s infinite',
        marginRight: '15px'
    },
    infoLabel: {
        fontFamily: 'dogica, sans-serif',
        textShadow: '2px 2px 2px rgba(255,33,156,0.7), -2px -2px 2px rgba(255,33,156,0.7), 2px -2px 2px rgba(255,33,156,0.7), -2px 2px 2px rgba(255,33,156,0.7)',
    },
    infoText: {
        fontFamily: 'dogica, sans-serif',
        textShadow: '2px 2px 2px rgba(0, 181, 195, 0.7), -2px -2px 2px rgba(0, 181, 195, 0.7), 2px -2px 2px rgba(0, 181, 195, 0.7), -2px 2px 2px rgba(0, 181, 195, 0.7)',
        fontSize: '10px'
    }
};

export default function About() {
    return (
        <div id="aboutMe" style={styles.container}>
            <div style={styles.header}>
                <img src={powerpuffMe} alt="me" style={styles.imageBounce} />
                <h1 style={styles.h1}>ABOUT ME</h1>
            </div>
            <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'center', 
                  alignItems: 'center'
            }}>
                <div style={styles.infoItem}>
                    <img src={heartIcon} alt="Icon" style={styles.infoIcon} />
                    <span style={styles.infoLabel}>LOCATION:</span>
                    <span style={styles.infoText}> los angeles, california</span>
                </div>
                <div style={styles.infoItem}>
                    <img src={heartIcon} alt="Icon" style={styles.infoIcon} />
                    <span style={styles.infoLabel}>UNIVERSITY:</span>
                    <span style={styles.infoText}> california state university, long beach</span>
                </div>
                <div style={styles.infoItem}>
                    <img src={heartIcon} alt="Icon" style={styles.infoIcon} />
                    <span style={styles.infoLabel}>DEGREE:</span>
                    <span style={styles.infoText}> b.s. in computer science</span>
                </div>
                <div style={styles.infoItem}>
                    <img src={heartIcon} alt="Icon" style={styles.infoIcon} />
                    <span style={styles.infoLabel}>LEADERSHIP:</span>
                    <span style={styles.infoText}> recruitment membership chair of w.i.c.</span>
                </div>
            </div>
        </div>
    );
}
