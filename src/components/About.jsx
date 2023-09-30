import React from 'react';
import powerpuffMe from '../images/powerpuff-me-2.jpg';
import photoFrame from '../images/photo-booth.jpg';
import heartIcon from '../images/heart-icon.jpg';
import 'font-awesome/css/font-awesome.min.css';

const mobileStyles = {
    container: {
      padding: '5%',
    },
    imageFrame: {
      width: '200px',
      paddingLeft: '0',
      paddingRight: '0',
      paddingTop: '10px',
    },
    textInfo: {
      fontSize: '6px',
    },
    section: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    textContainer: {
      marginTop: '10px',
    },
    header: {
      flexDirection: 'column',
      paddingBottom: '20px',
    },
    h1: {
      fontSize: '30px',
      paddingLeft: '0',
      paddingRight: '0',
      paddingTop: '10px',
    },
    imageBounce: {
      width: '40px',
    }
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
        paddingBottom: '75px',
    },
    imageBounce: {
        width: '55px',
        height: 'auto',
        animation: 'bounce 2s infinite',
        animationTimingFunction: 'cubic-bezier(0.28, 0.84, 0.42, 1)',
    },
    h1: {
        fontFamily: 'Protomo, sans-serif',
        fontSize: '40px',
        color: 'white',
        textShadow: `
            3px 3px 3px rgba(255,33,156,0.9), 
            -3px -3px 3px rgba(255,33,156,0.9), 
            3px -3px 3px rgba(255,33,156,0.9), 
            -3px 3px 3px rgba(255,33,156,0.9)
        `,
        textAlign: 'center',
        paddingLeft: '30px',
        paddingRight: '30px',
    },
    imageFrame: {
        width: '275px',
        height: 'auto',
        marginRight: '25px',
    },
    textInfo: {
        fontFamily: 'Crystal, sans-serif',
        fontSize: '10px',
        color: 'white',
    },
    section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: '20px',
    },
    textContainer: {
        textAlign: 'left',
    },
    '@media (max-width: 768px)': {
        container: {
          padding: '5%',
        },
        imageFrame: {
          width: '200px',   // reduced width to fit on smaller screens
        },
        textInfo: {
          fontSize: '8px',  // slightly smaller font size
        },
        section: {
          flexDirection: 'column',   // Stack the image and text vertically
          alignItems: 'center',
        },
        textContainer: {
          marginTop: '10px',  // Space between the image and text
        },
        header: {
          flexDirection: 'column',
          paddingBottom: '20px',
        },
        h1: {
          fontSize: '30px',   // reduced font size to fit on smaller screens
          paddingLeft: '0',
          paddingRight: '0',
          paddingTop: '10px',
        },
        imageBounce: {
          width: '40px',   // reduced size to fit on smaller screens
        }
      }
};

export default function About() {
    const isMobile = window.innerWidth <= 768;

    return (
        <div id="aboutMe" style={isMobile ? {...styles.container, ...mobileStyles.container} : styles.container}>
            <div style={isMobile ? {...styles.header, ...mobileStyles.header} : styles.header}>
                <img src={powerpuffMe} alt="me" style={isMobile ? {...styles.imageBounce, ...mobileStyles.imageBounce} : styles.imageBounce} />
                <h1 style={isMobile ? {...styles.h1, ...mobileStyles.h1} : styles.h1}>ABOUT ME</h1>
            </div>
            <section style={isMobile ? {...styles.section, ...mobileStyles.section} : styles.section}>
                <img src={photoFrame} alt="Description" style={isMobile ? {...styles.imageFrame, ...mobileStyles.imageFrame} : styles.imageFrame} />
                <div style={isMobile ? {...styles.textContainer, ...mobileStyles.textContainer} : styles.textContainer}>
                    <InfoBlock img={heartIcon} label="LOCATION:" text="los angeles, california" />
                    <InfoBlock img={heartIcon} label="UNIVERSITY:" text="california state university, long beach" />
                    <InfoBlock img={heartIcon} label="DEGREE:" text="b.s. in computer science" />
                    <InfoBlock img={heartIcon} label="LEADERSHIP:" text="recruitment membership chair of w.i.c." />
                    <InfoBlock img={heartIcon} label="PROGRAM:" text="break through tech ai at ucla site" />
                </div>
            </section>
        </div>
    );
}

function InfoBlock({ img, label, text }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img src={img} alt="Icon" style={{ width: '25px', height: '20px', animation: 'pulse 1s infinite' }} />
            <span style={{
                fontFamily: 'dogica, sans-serif',
                textShadow: `
                    2px 2px 2px rgba(255,33,156,0.7), 
                    -2px -2px 2px rgba(255,33,156,0.7), 
                    2px -2px 2px rgba(255,33,156,0.7), 
                    -2px 2px 2px rgba(255,33,156,0.7)
                `,
                fontSize: '11px',
                paddingLeft: '15px',
                paddingRight: '15px',
                color: 'white',
            }}>
                {label}
            </span>
            <span style={{
                fontFamily: 'dogica, sans-serif',
                textShadow: `
                    2px 2px 2px rgba(0, 181, 195, 0.7), 
                    -2px -2px 2px rgba(0, 181, 195, 0.7), 
                    2px -2px 2px rgba(0, 181, 195, 0.7), 
                    -2px 2px 2px rgba(0, 181, 195, 0.7)
                `,
                fontSize: '9px',
                color: 'white',
            }}>
                {text}
            </span>
        </div>
    );
}
