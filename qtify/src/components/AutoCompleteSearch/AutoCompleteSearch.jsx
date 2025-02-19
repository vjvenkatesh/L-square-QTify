import React from "react";
import styles from "./AutoCompleteSearch.module.css";

const AutoCompleteSearch = ({ data ,selected}) => {

  return (
    <div className={styles.Wrapper}>
      {data.length > 1
        ? data.map((item) => {
            return <div className={styles.lists} onClick={()=>selected(item.title)}>
                <div className={styles.left}>
                <img src={item.image} alt="Images" className={styles.image}/>
                <div className={styles.titles}>
                <p className={styles.titles}>{item.title}</p>
                {item.artists === undefined ? <p className={styles.author}>{item.slug}</p>:<p className={styles.author}>{item.artists}</p>}
                
                </div>
                </div>
                {item.follows === undefined  ? (<p>{item.likes} Likes</p>):(<p>{item.follows} Follows</p>)}
                
                
            </div>;
          })
        : null}
    </div>
  );
};

export default AutoCompleteSearch;
