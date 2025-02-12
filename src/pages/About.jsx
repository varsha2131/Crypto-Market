import React from 'react';
import styles from '../../styles/About.module.css';
import coin1 from '../assets/Coin-1.png'; // Path to your coin image
import coin2 from '../assets/Coin-2.png'; // Path to your coin image
import secureImage from '../assets/Whyusimage.jpg'; // Path to your image
import Testimonials from '../components/common/Testimonials';
import FAQ from '../components/common/FAQ';
import { FaCircleDot } from "react-icons/fa6";
import Team from '../components/common/Team';

const About = () => {
  return (
    <>
    <section className={styles.aboutContainer}>
      <div className={styles.textColumn}>
        <h2 className={styles.title}>Why Choose Crypto</h2>
         
        <p className={styles.marketDescription}>
          The Bitcoin and cryptocurrency markets have experienced a surge in volume recently,
          making it an exciting time to become a trader.
        </p>
        <ul className={styles.featureList}>
          <li className={styles.featureItem}> <span className='text-success mx-3'><FaCircleDot />
          </span>Fast</li>
          <li className={styles.featureItem}><span className="text-success mx-3"><FaCircleDot />
          </span>Secure</li>
          <li className={styles.featureItem}> <span className="text-success mx-3"><FaCircleDot />
          </span>Support</li>
        </ul>
      </div>
      <div className={styles.imageColumn}>
        <img src={coin1} alt="Bitcoin" className={styles.coin + ' ' + styles.coinLeft} />
        <img src={secureImage} alt="Secure illustration" className={styles.secureImage} />
        <img src={coin2} alt="Ethereum" className={styles.coin + ' ' + styles.coinRight} />
      </div>
    </section>
   
    <Team/>
    <FAQ />
    </>
  );
};

export default About;