import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import phoneIcon from '../images/phone-icon.jpg';
import '../Contact.css'; // Import the CSS file

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
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
  contactLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px'
  },
  contactText: {
    marginLeft: '10px',
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
  const contactLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    animation: 'iconHighlight 1s infinite',
    animationTimingFunction: 'ease-in-out'
  };

  const iconStyle = {
    width: '20px',
    marginRight: '10px'
  };

  const textStyle = {
    fontFamily: 'dogica, sans-serif',
    color: 'white',
    fontSize: '11px',
    textShadow: '2px 2px 2px rgba(190, 78, 255, 0.8), -2px -2px 2px rgba(190, 78, 255, 0.8), 2px -2px 2px rgba(190, 78, 255, 0.8), -2px 2px 2px rgba(190, 78, 255, 0.8)'
  };

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
        <div style={contactLinkStyle}>
          <a href="https://www.linkedin.com/in/reyna-aguirre-okamune/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"style={{ ...iconStyle, color: 'white' }}></i>
            <span style={textStyle}>@reyna-aguirre-okamune</span>
          </a>
        </div>

        <div style={contactLinkStyle}>
          <a href="https://github.com/reyna-okamune" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github icon-glow" style={{ ...iconStyle, color: 'white' }}></i>

            <span style={textStyle}>@reyna-okamune</span>
          </a>
        </div>

        <div style={contactLinkStyle}>
          <a href="https://discord.com/users/rey-chan" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-discord" style={{ ...iconStyle, color: 'white' }}></i>
            <span style={textStyle}>@rey-chan</span>
          </a>
        </div>

        <div style={contactLinkStyle}>
          <a href="https://www.instagram.com/reynaaguirre/?hl=en" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" style={{ ...iconStyle, color: 'white' }}></i>
            <span style={textStyle}>@reynaaguirre</span>
          </a>
        </div>

        <div style={contactLinkStyle}>
          <a href="mailto:reynaoaguirre@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope" style={{ ...iconStyle, color: 'white' }}></i>
            <span style={textStyle}>reynaoaguirre@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
