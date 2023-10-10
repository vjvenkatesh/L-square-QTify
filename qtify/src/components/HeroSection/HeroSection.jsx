import React from "react";
import styles from "./HeroSection.module.css";
import headphone from "../../assets/vibrating-headphone.png";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div>
      <h1>100 Thousand Songs, ad-free</h1>
      <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
      <img className={styles.heroImage} src={headphone} width={212} alt="headphone" />
      </div>
    </div>
  );
};

export default HeroSection;






// my initial approach

{/* <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <p className={styles.typography}>
            100 Thousand Songs, ad-free Over thousands podcast episodes
          </p>
        </div>
        <img className={styles.heroImage} src={headphone} alt="headphone" />
      </div>
    </div> */}