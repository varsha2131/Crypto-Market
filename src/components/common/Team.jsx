import React from 'react';
import styles from '../../../styles/team.module.css'; // Import your CSS module
import mikeJones from '../../assets/mike.png'; // Import your team member images
import maxAnderson from '../../assets/max.png';
import anitaGold from '../../assets/anitha.png';
import peterGreen from '../../assets/peter.png';
import kateWatson from '../../assets/kate.png';
import jacobAdams from '../../assets/jacob.png';

const Team = () => {
  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamContent}>
        <div className={styles.teamHeader}>
          <div className={styles.teamTitle}>Founders</div>
          <h2 className={styles.teamHeading}>Our crypto experts</h2>
           
        </div>

        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <img src={mikeJones} alt="Mike Jones" className={styles.memberImage} />
            <h3 className={styles.memberName}>Kelvin Peter</h3>
            <p className={styles.memberRole}>Founder</p>
          </div>
          <div className={styles.teamMember}>
            <img src={maxAnderson} alt="Max Anderson" className={styles.memberImage} />
            <h3 className={styles.memberName}>Abhraham John</h3>
            <p className={styles.memberRole}>CEO</p>
          </div>
           
          
          <div className={styles.teamMember}>
            <img src={kateWatson} alt="Kate Watson" className={styles.memberImage} />
            <h3 className={styles.memberName}>Honey Smith</h3>
            <p className={styles.memberRole}>Marketing Manager</p>
          </div>

          <div className={styles.teamMember}>
            <img src={anitaGold} alt="Anita Gold" className={styles.memberImage} />
            <h3 className={styles.memberName}>Juely </h3>
            <p className={styles.memberRole}>Senior consultant</p>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default Team;