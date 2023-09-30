import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import phoneIcon from '../images/phone-icon.jpg';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '60px'
  },
  phoneIcon: {
    width: '45px',
    height: 'auto',
    animation: 'ringing 0.5s infinite',
    animationTimingFunction: 'cubic-bezier(0.28, 0.84, 0.42, 1)'
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
  contactLinksContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Aligns the items to the left
},

contactLink: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20px',
    width: '100%', // This ensures the link spans the full width of the container
    animation: 'iconHighlight 1s infinite',
    animationTimingFunction: 'ease-in-out'
},

iconStyle: {
    width: '20px',
    height: '20px',
    marginRight: '20px', // Increase right margin to create space between icon and text
    color: 'white',
    flexShrink: 0, // This ensures the icon doesn't resize if there's less space
},
  contactText: {
    fontFamily: 'dogica, sans-serif',
    color: 'white',
    fontSize: '11px',
    textShadow: `
      2px 2px 2px rgba(190, 78, 255, 0.8), 
      -2px -2px 2px rgba(190, 78, 255, 0.8), 
      2px -2px 2px rgba(190, 78, 255, 0.8), 
      -2px 2px 2px rgba(190, 78, 255, 0.8)`
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

      <div style={styles.contactLinksContainer}>
        <div style={styles.contactLink}>
          <i className="fab fa-linkedin" style={styles.iconStyle}></i>
          <a href="https://www.linkedin.com/in/reyna-aguirre-okamune/" target="_blank" rel="noopener noreferrer" style={styles.contactText}>
            @reyna-aguirre-okamune
          </a>
        </div>

        <div style={styles.contactLink}>
          <i className="fab fa-github icon-glow" style={styles.iconStyle}></i>
          <a href="https://github.com/reyna-okamune" target="_blank" rel="noopener noreferrer" style={styles.contactText}>
            @reyna-okamune
          </a>
        </div>

        <div style={styles.contactLink}>
          <i className="fab fa-discord" style={styles.iconStyle}></i>
          <a href="https://discord.com/users/rey-chan" target="_blank" rel="noopener noreferrer" style={styles.contactText}>
            @rey-chan
          </a>
        </div>

        <div style={styles.contactLink}>
          <i className="fab fa-instagram" style={styles.iconStyle}></i>
          <a href="https://www.instagram.com/reynaaguirre/?hl=en" target="_blank" rel="noopener noreferrer" style={styles.contactText}>
            @reynaaguirre
          </a>
        </div>

        <div style={styles.contactLink}>
          <i className="fas fa-envelope" style={styles.iconStyle}></i>
          <a href="mailto:reynaoaguirre@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.contactText}>
            reynaoaguirre@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
