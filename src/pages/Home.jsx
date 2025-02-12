import React from 'react';
import styles from '../../styles/home.module.css'; // Importing CSS module for home page styling

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
            Fast, secure, and easy way to buy and sell Bitcoin, Ethereum, and more.
          </p>
          <button className={styles.heroButton}>Get Started</button>
        </div>
        <div className={styles.heroImage}>
          <img src="https://unblast.com/wp-content/uploads/2023/01/Cryptocurrencies-Exchange-Isometric-Illustration-1024x819.jpg" alt="Crypto Trading" />
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Ready to Start Trading?</h2>
        <p className={styles.ctaText}>
          Join our community today and begin trading cryptocurrencies with ease and security.
        </p>
        <button className={styles.ctaButton}>Sign Up Now</button>
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
    </div>
  );
};

export default Home;
