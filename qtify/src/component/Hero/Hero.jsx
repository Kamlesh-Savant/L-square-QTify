import React from "react";
import HeroImage from "../../assets/headphone.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <>
      <main className={styles.wraper}>
        <div className={styles.textContent}>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <img src={HeroImage} alt="hero" className={styles.img} />
      </main>
    </>
  );
}

export default Hero;
