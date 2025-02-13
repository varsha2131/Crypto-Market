import React from 'react';
import styles from '../../styles/home.module.css'; // Importing CSS module for home page styling
import mike from '../assets/mike.png';
import max from '../assets/max.png';
import kate from '../assets/kate.png';

// Reusable Card Component for displaying features
const FeatureCard = ({ title, description, icon }) => (
  <div className={styles.featureCard}>
    <div className={styles.iconWrapper}>
      <img src={icon} alt={title} className={styles.featureIcon} />
    </div>
    <h3 className={styles.featureTitle}>{title}</h3>
    <p className={styles.featureDescription}>{description}</p>
  </div>
);

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>Trade Cryptocurrency with Ease</h1>
          <p className={styles.heroSubHeading}>
            Fast, secure, and easy way to buy and sell coin, Ethereum, and more.
          </p>
          <button className={styles.heroButton}>Get Started</button>
        </div>
        <div className={styles.heroImage}>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/crypto-analysis-5558064-4625607.png" />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.featuresHeading}>Why Choose Us?</h2>
        <div className={styles.featuresGrid}>
          <FeatureCard
            title="Easy Registration"
            description="Sign up and start trading in just a few minutes. No complicated setup!"
            icon="https://bitcoinist.com/wp-content/uploads/2018/08/AdobeStock_197910537-1.jpeg"
          />
          <FeatureCard
            title="Secure Trading"
            description="Our platform is built with top-level security features to protect your funds."
            icon="https://img.freepik.com/premium-vector/secure-trading-vector-logo-design-illustration_733947-2165.jpg?w=2000"
          />
          <FeatureCard
            title="24/7 Support"
            description="Our customer support is always available to assist you whenever you need."
            icon="https://static.vecteezy.com/system/resources/previews/003/805/401/original/service-24-7-concept-call-center-support-illustration-flat-vector.jpg"
          />
        </div>
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

      {/* How It Works Section */}
      <section className={styles.howItWorksSection}>
        <h2 className={styles.howItWorksHeading}>How It Works</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <h3>Step 1: Sign Up</h3>
            <p>Create an account on CryptoPro and complete the quick verification process.</p>
          </div>
          <div className={styles.stepCard}>
            <h3>Step 2: Deposit Funds</h3>
            <p>Deposit funds into your account using a secure payment method.</p>
          </div>
          <div className={styles.stepCard}>
            <h3>Step 3: Start Trading</h3>
            <p>Start trading your favorite cryptocurrencies using advanced tools and real-time data.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
