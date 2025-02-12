import React, { useState } from 'react';
import styles from '../../styles/contactUs.module.css'; // Importing the CSS module for styling

const ContactUs = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [rating, setRating] = useState(0);  // To handle rating star clicks

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  // Handle rating star click
  const handleStarClick = (index) => {
    setRating(index + 1);  // Set rating based on the clicked star index
  };

  return (
    <div className={styles.contactUsContainer}>
      {/* Contact Form and Map Section */}
      <section className={styles.contactSection}>
        <div className={styles.formSection}>
          <h2 className={styles.heading}>Contact Us</h2>
          <p className={styles.subHeading}>Have questions or need support? Get in touch with us.</p>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.inputField}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.inputField}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className={styles.textArea}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.mapSection}>
          <h3 className={styles.mapHeading}>Find Us on the Map</h3>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR-EMBED-CODE-HERE"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Reach Us and Rate Us Section */}
      <section className={styles.reachAndRateSection}>
        <div className={styles.reachUsSection}>
          <h3 className={styles.infoHeading}>Reach Us At</h3>
          <p className={styles.infoText}>
            <strong>Email:</strong> support@cryptopro.com
          </p>
          <p className={styles.infoText}>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p className={styles.infoText}>
            <strong>Address:</strong> 123 Crypto Avenue, Crypto City, CC 12345
          </p>
        </div>

        <div className={styles.rateUsSection}>
          <h3 className={styles.rateUsHeading}>Rate Us</h3>
          <div className={styles.ratingStars}>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={styles.star}
                onClick={() => handleStarClick(index)}
                style={{ color: index < rating ? '#FFD700' : 'grey' }} // Color stars based on rating
              >
                ★
              </span>
            ))}
          </div>
          <p className={styles.ratingText}>Your feedback matters to us! Please rate our services.</p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
