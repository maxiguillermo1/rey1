import React from "react";
import phoneIcon from '../images/phone-icon.jpg';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '60px'
    },
    phoneIcon: {
        width: '45px',
        height: 'auto',
        animation: 'ringing 0.5s infinite'
    },
    contactTitle: {
        fontFamily: 'Protomo, sans-serif',
        fontSize: '40px',
        color: 'white',
        paddingLeft: '27px',
        paddingRight: '27px',
        textShadow: `
      3px 3px 3px rgba(255,33,156,0.9), 
      -3px -3px 3px rgba(255,33,156,0.9), 
      3px -3px 3px rgba(255,33,156,0.9), 
      -3px 3px 3px rgba(255,33,156,0.9)`
    },
    contactLink: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px'
    },
    iconStyle: {
        width: '20px',
        marginRight: '10px'
    },
    textStyle: {
        fontFamily: 'dogica, sans-serif',
        color: 'white',
        fontSize: '11px',
        textShadow: `
      2px 2px 2px rgba(190, 78, 255, 0.8), 
      -2px -2px 2px rgba(190, 78, 255, 0.8), 
      2px -2px 2px rgba(190, 78, 255, 0.8), 
      -2px 2px 2px rgba(190, 78, 255, 0.8)`
    }
};

export default function Contact() {
    return (
        <div id="contact" style={styles.container}>
            <div style={styles.header}>
                <img
                    src={phoneIcon}
                    alt="Phone Icon"
                    style={styles.phoneIcon}
                />
                <h1 style={styles.contactTitle}>CONTACT</h1>
                <img
                    src={phoneIcon}
                    alt="Phone Icon"
                    style={{ ...styles.phoneIcon, transform: 'scaleX(-1)' }}
                />
            </div>
            {/* The contact links will follow a similar pattern and can be written in a loop. */}
            {[
                { href: 'https://www.linkedin.com/in/reyna-aguirre-okamune/', iconClass: 'fab fa-linkedin', text: '@reyna-aguirre-okamune' },
                { href: 'https://github.com/reyna-okamune', iconClass: 'fab fa-github', text: '@reyna-okamune' },
                // ... Add other contact links in the same format.
            ].map((link, index) => (
                <div style={styles.contactLink} key={index}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <i className={link.iconClass} style={styles.iconStyle}></i>
                        <span style={styles.textStyle}>{link.text}</span>
                    </a>
                </div>
            ))}
        </div>
    );
}
