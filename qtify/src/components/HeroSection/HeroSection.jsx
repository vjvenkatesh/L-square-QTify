import React from "react";
import styles from "./HeroSection.module.css";
import headphone from "../../assets/vibrating-headphone.png";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <p className={styles.typography}>
            100 Thousand Songs, ad-free Over thousands podcast episodes
          </p>
        </div>
        <img className={styles.heroImage} src={headphone} alt="headphone" />
      </div>
    </div>
  );
};

export default HeroSection;
