import React from "react";
import pinkBearIcon from '../images/pink-bear.jpg';
import ipodIcon from '../images/ipod-icon.jpg';
import desertIcon from '../images/desert-icon.jpg';

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
    h1: {
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
    iconStyle: {
        width: '75px',
        height: 'auto',
        margin: '20px',
        alignSelf: 'center'
    },
    activity: {
        fontFamily: 'dogica, sans-serif',
        color: 'white',
        fontSize: '14px',
        paddingBottom: '10px',
        textShadow: `
      2px 2px 2px rgba(277,0,137,0.6), 
      -2px -2px 2px rgba(277,0,137,0.6), 
      2px -2px 2px rgba(277,0,137,0.6), 
      -2px 2px 2px rgba(277,0,137,0.6)`
    }
};

export default function Currents() {
    return (
        <div id="currents" style={styles.container}>
            <div style={styles.header}>
                <img
                    src={pinkBearIcon}
                    alt="Pink Bear Icon"
                    style={styles.iconStyle}
                />
                <h1 style={styles.h1}>CURRENTS</h1>
                <img
                    src={ipodIcon}
                    alt="iPod Icon"
                    style={styles.iconStyle}
                />
            </div>

            {/* You can add other content sections similar to the below format. */}
            <div style={styles.activity}>
                <p>Currently exploring the mysteries of the <span style={{fontWeight: 'bold'}}>Sahara desert</span>.</p>
                <img
                    src={desertIcon}
                    alt="Desert Icon"
                    style={styles.iconStyle}
                />
            </div>

            {/* Add other activity blocks or content here. */}
        </div>
    );
}
