import React from 'react';
import styles from '../../styles/about.module.css';
import mike from '../assets/mike.png';
import max from '../assets/max.png';
import kate from '../assets/kate.png';



const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        <h1>About CryptoPro</h1>
        <p>Your trusted partner in the world of cryptocurrency</p>
      </header>

      <section className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
          At CryptoPro, we aim to empower individuals to explore, invest, and manage their cryptocurrency portfolios with ease.
          Our goal is to provide reliable, up-to-date information and advanced tools to help you navigate the crypto market securely.
        </p>
      </section>

      <section className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.memberCard}>
            <img src={mike} alt="Team Member 1" className={styles.memberImage} />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className={styles.memberCard}>
            <img src={max} alt="Team Member 2" className={styles.memberImage} />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className={styles.memberCard}>
            <img src={kate} alt="Team Member 3" className={styles.memberImage} />
            <h3>Lee Rosy</h3>
            <p>Blockchain Expert</p>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2>Our Services</h2>
        <ul className={styles.servicesList}>
          <li className={styles.serviceItem}>
            <i className="fas fa-chart-line"></i> {/* Add icon for service */}
            Real-time Crypto Market Data
          </li>
          <li className={styles.serviceItem}>
            <i className="fas fa-wallet"></i> {/* Add icon for service */}
            Advanced Portfolio Management
          </li>
          <li className={styles.serviceItem}>
            <i className="fas fa-newspaper"></i> {/* Add icon for service */}
            Cryptocurrency News and Trends
          </li>
          <li className={styles.serviceItem}>
            <i className="fas fa-lock"></i> {/* Add icon for service */}
            Secure Transactions and Wallet Services
          </li>
          
        </ul>
      </section>
      


      <footer className={styles.footer}>
        <p>&copy; 2025 CryptoPro. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
