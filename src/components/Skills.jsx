import React from "react";
import flyingPowerpuff from '../images/move-powerpuff-me.jpg';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        padding: '50px 10%',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '50px'
    },
    h1: {
        fontFamily: 'Protomo, sans-serif',
        fontSize: '45px',
        color: 'white',
        textShadow: `
                3px 3px 3px rgba(255,33,156,0.9), 
                -3px -3px 3px rgba(255,33,156,0.9), 
                3px -3px 3px rgba(255,33,156,0.9), 
                -3px 3px 3px rgba(255,33,156,0.9)
            `,
        marginRight: '20px',
    },
    image: {
        width: '100px',
        height: 'auto',
        animation: 'flying 1s infinite',
    },
    h2: {
        fontFamily: 'dogica, sans-serif',
        color: 'white',
        fontSize: '18px',
        textShadow: `
                2px 2px 2px rgba(255,33,156,0.7), 
                -2px -2px 2px rgba(255,33,156,0.7), 
                2px -2px 2px rgba(255,33,156,0.7), 
                -2px 2px 2px rgba(255,33,156,0.7)
            `,
        marginBottom: '20px',
    },
    ul: {
        fontFamily: 'dogica, sans-serif',
        color: 'white',
        fontSize: '14px',
        textShadow: `
                2px 2px 2px rgba(0, 181, 195, 0.7), 
                -2px -2px 2px rgba(0, 181, 195, 0.7), 
                2px -2px 2px rgba(0, 181, 195, 0.7), 
                -2px 2px 2px rgba(0, 181, 195, 0.7)
            `,
    }
};

const SkillSection = ({ title, items }) => (
    <section style={{ marginBottom: '30px' }}>
        <h2 style={styles.h2}>{title.toUpperCase()}:</h2>
        <ul style={styles.ul}>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </section>
);

export default function Skills() {
    return (
        <div id="skills" style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.h1}>SKILLS</h1>
                <img src={flyingPowerpuff} alt="powerpuff girl" style={styles.image} />
            </div>

            <SkillSection
                title="Languages"
                items={["python, C#, C++, javascript, kotlin"]}
            />

            <SkillSection
                title="IDEs"
                items={[
                    "visual studio code, pycharm",
                    "jupyter notebook, replit",
                    "ubuntu, deepnote, android studio"
                ]}
            />

            <SkillSection
                title="Certificates"
                items={[
                    "machine learning foundations - eCornell",
                    "foundational c# - microsoft"
                ]}
            />
        </div>
    );
}
