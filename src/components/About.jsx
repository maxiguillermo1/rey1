import React from 'react';
import powerpuffMe from '../images/powerpuff-me-2.jpg';
import photoFrame from '../images/photo-booth.jpg';
import heartIcon from '../images/heart-icon.jpg';

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
        paddingBottom: '75px'
    },
    imageBounce: {
        width: '55px',
        height: 'auto',
        animation: 'bounce 2s infinite',
        animationTimingFunction: 'cubic-bezier(0.28, 0.84, 0.42, 1)'
    },
    h1: {
        fontFamily: 'Protomo, sans-serif',
        fontSize: '40px',
        color: 'white',
        textShadow: '3px 3px 3px rgba(255,33,156,0.9), -3px -3px 3px rgba(255,33,156,0.9), 3px -3px 3px rgba(255,33,156,0.9), -3px 3px 3px rgba(255,33,156,0.9)',
        textAlign: 'center',
        paddingLeft: '30px',
        paddingRight: '30px'
    },
    imageFrame: {
        maxWidth: '90%',
        height: 'auto'
    },
    textInfo: {
        fontFamily: 'Crystal, sans-serif',
        fontSize: '12px',
        color: 'white',
        maxWidth: '90%',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
};

export default function About() {
    return (
        <div id="aboutMe" style={styles.container}>
            <div style={styles.header}>
                <img src={powerpuffMe} alt="me" style={styles.imageBounce} />
                <h1 style={styles.h1}>ABOUT ME</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={photoFrame} alt="Description" style={styles.imageFrame} />
                <div style={{ paddingLeft: '40px' }}>
                    <p style={styles.textInfo}>
                        <InfoBlock img={heartIcon} label="LOCATION:" text="los angeles, california" />
                        <InfoBlock img={heartIcon} label="UNIVERSITY:" text="california state university, long beach" />
                        <InfoBlock img={heartIcon} label="DEGREE:" text="b.s. in computer science" />
                        <InfoBlock img={heartIcon} label="LEADERSHIP:" text="recruitment membership chair of w.i.c." />
                        <InfoBlock img={heartIcon} label="PROGRAM:" text="break through tech ai at ucla site" />
                    </p>
                </div>
            </div>
        </div>
    );
}
