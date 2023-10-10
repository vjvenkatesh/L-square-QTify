import React, {  useRef } from "react";
import styles from "./Cards.module.css";
import SongCard from "../SongCards/SongCard";





const Cards = ({Albums,title}) => {

    
    const left="<";
    const right=">";
    

    const sliderRef = useRef(null);

    const scrollAmount = 500; 
  
    const handleScroll = (scrollOffset) => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: scrollOffset,
          behavior: 'smooth',
        });
      }
    };

    

  return (
    <div className={styles.songArea}>
      <div className={styles.topHeadContent}>
        <p className={styles.songVariant}>{title}</p>
        <p className={styles.showAll}>Show All</p>
      </div>
        <div className={styles.CardContent}>
        <button className={styles.buttonSliderLeft} onClick={()=>handleScroll(-scrollAmount)}>{left}</button>
        <div className={styles.sliderContent} ref={sliderRef}>
        <SongCard albumns={Albums} />
        </div>
      <button className={styles.buttonSliderRight} onClick={()=>handleScroll(scrollAmount)}>{right}</button>
      </div>
    </div>
  );
};

export default Cards;
