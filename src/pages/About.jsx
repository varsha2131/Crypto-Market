import React from 'react';
import styles from '../../styles/about.module.css';
import mike from '../assets/mike.png';
import max from '../assets/max.png';
import kate from '../assets/kate.png';
import coin from '../assets/coin.png'; // Add the image you'd like to use

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        <h1>About CryptoPro</h1>
        <p>Your trusted partner in the world of cryptocurrency</p>
        <p>
          CryptoPro is a cutting-edge platform that combines technology and finance to provide the most advanced and secure cryptocurrency solutions. 
          Whether you're a beginner or an experienced trader, we are here to help you stay ahead of the curve in the rapidly evolving digital asset world.
        </p>
      </header>
      {/* Add image with animation */}
      <section className={styles.aboutImageSection}>
        
        <img src={ coin} alt="CryptoPro" className={styles.animatedImage} />
      </section>

      <section className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
          At CryptoPro, we aim to empower individuals to explore, invest, and manage their cryptocurrency portfolios with ease. 
          Our goal is to provide reliable, up-to-date information and advanced tools to help you navigate the crypto market securely.
        </p>

        <ul>
          <li><strong>Education</strong>: Offering easy-to-understand educational content for users to learn about cryptocurrency, blockchain technology, and market analysis.</li>
          <li><strong>Security</strong>: Implementing the highest standards of security to protect your investments, transactions, and personal information.</li>
          <li><strong>Innovation</strong>: Continuously evolving our platform with new features, real-time data, and cutting-edge tools to give you an edge in the competitive crypto market.</li>
        </ul>
      </section>

      <section className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.memberCard}>
            <img src={mike} alt="Team Member 1" className={styles.memberImage} />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>John has over 15 years of experience in the tech and finance industries. His vision is to make cryptocurrency accessible to everyone, from novice users to advanced traders.</p>
          </div>
          <div className={styles.memberCard}>
            <img src={max} alt="Team Member 2" className={styles.memberImage} />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
            <p>Jane is an expert blockchain developer and is passionate about developing innovative tools for the crypto ecosystem. She leads the engineering team that builds and maintains our platform's infrastructure.</p>
          </div>
          <div className={styles.memberCard}>
            <img src={kate} alt="Team Member 3" className={styles.memberImage} />
            <h3>Lee Rosy</h3>
            <p>Blockchain Expert</p>
            <p>Lee is a blockchain expert with a deep understanding of cryptographic algorithms and blockchain protocols. She works to ensure our platform stays at the forefront of blockchain technology and security.</p>
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
