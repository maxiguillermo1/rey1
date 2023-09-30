import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import pinkBearIcon from '../images/pink-bear.jpg';
import ipodIcon from '../images/ipod-icon.jpg';
import desertIcon from '../images/desert-icon.jpg';

const isMobile = window.innerWidth <= 768;

const mobileStyles = {
    h1: {
        fontSize: '20px',
        paddingLeft: '10px',
        paddingRight: '10px',
    },
    // ... any other styles you want to modify for mobile can be added here.
};


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
    },
    h1: {
        fontFamily: 'Protomo, sans-serif',
        fontSize: '40px',
        color: 'white',
        textShadow: `
            3px 3px 3px rgba(255,33,156,0.9),
            -3px -3px 3px rgba(255,33,156,0.9),
            3px -3px 3px rgba(255,33,156,0.9),
            -3px 3px 3px rgba(255,33,156,0.9)`,
        textAlign: 'center',
        paddingLeft: '30px',
        paddingRight: '30px',
    },
    p: {
        fontFamily: 'dogica, sans-serif',
        fontSize: '12px',
        color: 'white',
        marginTop: '10px',
        paddingBottom: '50px',
        textShadow: `
            2px 2px 2px rgba(277,0,137,0.6),
            -2px -2px 2px rgba(277,0,137,0.6),
            2px -2px 2px rgba(277,0,137,0.6),
            -2px 2px 2px rgba(277,0,137,0.6)`,
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center content horizontally
        paddingBottom: '20px',
    },
    icon: {
        width: '75px',
        height: 'auto',
        alignSelf: 'center',
    },
    textContainer: {
        marginLeft: '20px',
    },
    activity: {
        fontFamily: 'dogica, sans-serif',
        color: 'white',
        fontSize: '14px',
        paddingBottom: '10px',
        textShadow: `
            2px 2px 2px rgba(255,33,156,0.9),
            -2px -2px 2px rgba(255,33,156,0.9),
            2px -2px 2px rgba(255,33,156,0.9),
            -2px 2px 2px rgba(255,33,156,0.9)`,
    },
    activityText: {
        fontFamily: 'dogica, sans-serif',
        color: 'white',
        fontSize: '12px',
        textShadow: `
            2px 2px 2px rgba(190, 78, 255, 0.8),
            -2px -2px 2px rgba(190, 78, 255, 0.8),
            2px -2px 2px rgba(190, 78, 255, 0.8),
            -2px 2px 2px rgba(190, 78, 255, 0.8)`,
        display: 'inline',
    },
    song: {
        fontFamily: 'dogica, sans-serif',
        color: 'white',
        fontSize: '14px',
        paddingBottom: '10px',
        textShadow: `
            2px 2px 2px rgba(255,33,156,0.9),
            -2px -2px 2px rgba(255,33,156,0.9),
            2px -2px 2px rgba(255,33,156,0.9),
            -2px 2px 2px rgba(255,33,156,0.9)`,
    },
    songLink: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    songText: {
        fontFamily: 'dogica, sans-serif',
        color: 'white',
        fontSize: '12px',
        textShadow: `
            2px 2px 2px rgba(190, 78, 255, 0.8),
            -2px -2px 2px rgba(190, 78, 255, 0.8),
            2px -2px 2px rgba(190, 78, 255, 0.8),
            -2px 2px 2px rgba(190, 78, 255, 0.8)`,
        display: 'inline',
    },
    dessert: {
        fontFamily: 'dogica, sans-serif',
        color: 'white',
        fontSize: '14px',
        paddingBottom: '10px',
        textShadow: `
            2px 2px 2px rgba(255,33,156,0.9),
            -2px -2px 2px rgba(255,33,156,0.9),
            2px -2px 2px rgba(255,33,156,0.9),
            -2px 2px 2px rgba(255,33,156,0.9)`,
    },
    dessertText: {
        fontFamily: 'dogica, sans-serif',
        color: 'white',
        fontSize: '12px',
        textShadow: `
            2px 2px 2px rgba(190, 78, 255, 0.8),
            -2px -2px 2px rgba(190, 78, 255, 0.8),
            2px -2px 2px rgba(190, 78, 255, 0.8),
            -2px 2px 2px rgba(190, 78, 255, 0.8)`,
        display: 'inline',
    },
    '@media (max-width: 768px)': {
        container: {
            padding: '5%',
        },
        imageFrame: {
            width: '5%',
        },
        textInfo: {
            fontSize: '10px',
        },
    },
};

export default function Currents() {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={isMobile ? mobileStyles.h1 : styles.h1}>CURRENT FAVORITES</h1>
            </div>
            <p style={styles.p}>
                <i className="far fa-heart"></i> &nbsp; &nbsp;fall 2023 &nbsp; &nbsp;<i className="far fa-heart"></i>
            </p>

            <section style={styles.section}>
                <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '20px' }}>
                    <img src={pinkBearIcon} alt="pink bear icon" style={styles.icon} />
                    <div style={styles.textContainer}>
                        <div style={styles.activity}>ACTIVITY</div>
                        <div style={styles.activityText}>cafes and shopping <i className="fas fa-heart"></i></div>
                    </div>
                </div>
            </section>

            <section style={styles.section}>
                <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '20px', height: '150px' }}>
                    <img src={ipodIcon} alt="ipod icon" style={{ ...styles.icon, width: '90px' }} />
                    <div style={styles.textContainer}>
                        <div style={styles.song}>SONG</div>
                        <a href="https://www.youtube.com/watch?v=CeA92xqw-QI" target="_blank" rel="noopener noreferrer" style={styles.songLink}>
                            <div style={styles.songText}>“bags” by clairo <i className="fas fa-heart"></i></div>
                        </a>
                    </div>
                </div>
            </section>

            <section style={styles.section}>
                <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '30px' }}>
                    <img src={desertIcon} alt="dessert icon" style={{ ...styles.icon, width: '120px' }} />
                    <div style={{ ...styles.textContainer, marginLeft: '0px' }}>
                        <div style={styles.dessert}>DESSERT</div>
                        <div style={styles.dessertText}>melon cream soda <i className="fas fa-heart"></i></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
