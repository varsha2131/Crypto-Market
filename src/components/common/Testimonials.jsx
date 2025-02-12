import React from 'react';
import styles from '../../../styles/Testimonials.module.css';
import testimonialImage from '../../assets/Testmonial.png'; // Path to your image
import user1 from '../../assets/user-1.png'; // Path to user image
import user2 from '../../assets/usergirl.png'; // Path to user image
import user3 from '../../assets/user-2.png'; // Path to user image

const Testimonials = () => {
    return (
        <section className={styles.testimonialsSection}> {/* Main container */}
            <div className={styles.testimonialContent}> {/* Image and text content */}
                <img src={testimonialImage} alt="Testimonial" className={styles.testimonialImage} />
                <div className={styles.testimonialText}>
                    <h2 className={styles.testimonialTitle}>TESTIMONIALS</h2>
                    <p className={styles.testimonialDescription}>
                        Millions of users around the world. It's an exciting time to become a trader.
                    </p>
                    <p>TESTIMONIALS
                        Millions of users around the world
                        It’s an exciting time to become a trader.</p>
                    <button className={styles.learnMoreButton}>Learn more</button>
                </div>
            </div>
            <div className={styles.reviewCards}> {/* Review cards container */}
                <div className={styles.reviewCard}> {/* Review card 1 */}
                    <div className={styles.cardStars}>★★★★★</div>
                    <p className={styles.cardText}>
                        "Great! This is one of the best apps I have ever used before."
                    </p>
                    <div className={styles.cardUser}>
                        <img src={user1} alt="User 1" className={styles.userImage} />
                        <div className={styles.userInfo}>
                            <p className={styles.userName}>Adam Watson</p>
                            <p className={styles.userRole}>Barista</p>
                        </div>
                    </div>
                </div>
                <div className={styles.reviewCard}> {/* Review card 2 */}
                    <div className={styles.cardStars}>★★★★★</div>
                    <p className={styles.cardText}>
                        "Great! Compared to everything else I've ever used, this is the best app."
                    </p>
                    <div className={styles.cardUser}>
                        <img src={user2} alt="User 2" className={styles.userImage} />
                        <div className={styles.userInfo}>
                            <p className={styles.userName}>Lisa Smith</p>
                            <p className={styles.userRole}>Designer</p>
                        </div>
                    </div>
                </div>
                <div className={styles.reviewCard}> {/* Review card 3 */}
                    <div className={styles.cardStars}>★★★★★</div>
                    <p className={styles.cardText}>
                        "Great! This is one of the best apps I have ever used before."
                    </p>
                    <div className={styles.cardUser}>
                        <img src={user3} alt="User 3" className={styles.userImage} />
                        <div className={styles.userInfo}>
                            <p className={styles.userName}>Nick Green</p>
                            <p className={styles.userRole}>Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;