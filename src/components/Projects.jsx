import React from "react";

export default function Projects() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        },
        header: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '75px',
        },
        h1: {
            fontFamily: 'Protomo, sans-serif',
            fontSize: '60px',
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

    return (
        <div id="projects" style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.h1}>PROJECTS</h1>
            </div>
        </div>
    );
}
