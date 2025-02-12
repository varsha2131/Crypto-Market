import React, { useState } from 'react';
import styles from '../../../styles/FAQ.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing icons for toggle

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track single expanded item

  const faqData = [
    {
      question: 'How do I start trading crypto?',
      answer: "To start trading, you'll need to create an account on a cryptocurrency exchange, verify your identity, deposit funds, and start trading your preferred cryptocurrencies.",
    },
    {
      question: 'Is cryptocurrency safe?',
      answer: 'Cryptocurrency transactions are secured using blockchain technology and cryptographic encryption. However, users must take precautions such as using secure wallets and enabling two-factor authentication (2FA).',
    },
    {
      question: 'What are the risks of investing in crypto?',
      answer: 'Cryptocurrency investments can be highly volatile. Prices can change rapidly, and there is a risk of hacking, regulatory changes, and market fluctuations.',
    },
    {
      question: 'What is a crypto wallet?',
      answer: 'A crypto wallet is a digital tool that allows users to store and manage their cryptocurrencies securely. Wallets can be hardware-based or software-based.',
    },
    {
      question: 'How do I withdraw funds from a crypto exchange?',
      answer: 'You can withdraw funds by linking your bank account, selecting the withdrawal option on your exchange, and following the necessary security procedures.',
    },
    {
      question: 'Can I use cryptocurrency for everyday purchases?',
      answer: 'Yes, many merchants now accept cryptocurrency as payment. Some platforms also offer crypto debit cards that can be used for purchases.',
    },
  ];

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        

        <div className={styles.faqGrid}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.questionContainer}
                onClick={() => toggleAnswer(index)}
              >
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <span className={styles.toggleIcon}>
                  {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              {expandedIndex === index && (
                <div className={styles.faqAnswer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
