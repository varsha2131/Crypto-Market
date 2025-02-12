import React from "react";
import styles from "../../styles/home.module.css";
import { TbCirclePercentageFilled } from "react-icons/tb";
import { PiStarFourFill } from "react-icons/pi";

// Import images
import atmCard from "../assets/Atmcard.jpg";
//import handImage from "../assets/Handsymbol.png";
import bitcoinChart from "../assets/Chart.png";
import downloadAppImage from "../assets/Downloadapp.png";
import registerImage from "../assets/Register.png";
import connectWalletImage from "../assets/Wallet.png";
import startTradingImage from "../assets/Starttrading.png";

// Import Components
import About from "./About";

// Reusable Statistic Component
const Statistic = ({ value, label }) => (
  <div className={styles.stat}>
    <span className={styles.value} style={{ color: "#36BB91" }}>
      {value}
    </span>
    <br />
    {label}
  </div>
);

// Reusable Card Component
const FeatureCard = ({ image, title, description }) => (
  <div className={styles.worksCard}>
    <img src={image} alt={title} className={styles.cardImage} />
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardText}>{description}</p>
  </div>
);

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.container}>
        <div className={styles.textSection}>
          <h1 className={styles.heading}>
          The Easiest Way To <br />
          Buy,Sell  Your <br />
          CryptoCurrency
          </h1>
          <button className={styles.startButton}>Explore </button>
          
        </div>
        <div className={styles.imageSection}>
           
          <img src={atmCard} alt="ATM Card" className={styles.atmCard} />
        </div>
      </section>

      {/* Earning Section */}
      <section className={styles.earningSection}>
        <div className={styles.earningContent}>
          <div className={styles.leftContent}>
            <div className={styles.earnTitle}>EARN CRYPTO</div>
            <h2 className={styles.heading}>
              Deposit crypto earn{" "}
              <PiStarFourFill className={styles.staricon} />{" "}
              <span className={styles.highlight}>interest</span>
            </h2>
            <p>Choose from 150+ cryptocurrencies</p>
            <div className={styles.interestRates}>
              <Statistic value="15%" label="On cryptos" />
              <Statistic value="40%" label="On stablecoins" />
            </div>
          </div>

          {/* Bitcoin Chart */}
          <div className={styles.rightContent}>
            <div className={styles.chartContainer}>
              <div className={styles.chartDetails}>
                <div className={styles.chartHeader}>
                  <span className={styles.chartTitle}>Bitcoin Chart</span>
                  <div className={styles.chartNav}>
                    {["1W", "1M", "3M", "1Y", "All"].map((period) => (
                      <span key={period}>{period}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.chartValue}>
                  1,087.91 <span className={styles.currency}>EUR</span>
                </div>
              </div>
              <img src={bitcoinChart} alt="Bitcoin Chart" className={styles.bitcoinChart} />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className={styles.worksContainer}>
        <div className={styles.worksContent}>
          <div className={styles.worksHeader}>
            <div className={styles.features}>FEATURES</div>
            <h2 className={styles.howItWorks}>How it works</h2>
            <p className={styles.worksDescription}>
              Cryptocurrency markets have seen an increase in volume in recent
              weeks, which is a great opportunity for new traders.
            </p>
          </div>

          {/* Features Cards */}
          <div className={styles.worksCards}>
            <FeatureCard
              image={downloadAppImage}
              title="Download App"
              description="Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app."
            />
            <FeatureCard
              image={registerImage}
              title="Register"
              description="Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app."
            />
            <FeatureCard
              image={connectWalletImage}
              title="Connect Wallet"
              description="Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app."
            />
            <FeatureCard
              image={startTradingImage}
              title="Start Trading"
              description="Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />
    </>
  );
};

export default Home;
