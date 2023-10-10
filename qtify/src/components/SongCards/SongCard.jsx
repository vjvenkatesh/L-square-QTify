import React from "react";
import styles from "./SongCard.module.css";

const SongCard = ({ albumns }) => {
  console.log(albumns);

  return (
    <div className={styles.songLayout}>
        {albumns
          ? (albumns.map((albumn) => {
              return (
                <div className={styles.songContainer} key={albumn.title}>
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.songImage}
                      src={albumn.image}
                      alt="imagecontainer"
                    />
                  </div>
                  <div className={styles.buttonContainer}>
                    <button className={styles.bottomButton}>
                      {albumn.follows} follows
                    </button>
                  </div>
                  <div className={styles.songTitle}>
                    <p className={styles.songName}>{albumn.title}</p>
                  </div>
                  </div>
              );
            }))
          : null}
          </div>
  );
};

export default SongCard;
