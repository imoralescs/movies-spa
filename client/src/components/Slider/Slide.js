import React from 'react';
import styles from './slider.css';

export default function Slide(props) {
  return (
    <div className={styles.slide} style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1000${props.slideData.backdrop_path}')`}}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.poster}>
          <img src={`https://image.tmdb.org/t/p/w1000${props.slideData.poster_path}`} />
        </div>
        <div div className={styles.info}>
          <h2 className={styles.title}>{props.slideData.title}</h2>
          <p className={styles.overview}>{props.slideData.overview}</p>
          <div className={styles.callAction}>
            <button className={styles.button}>Buy Ticket Now</button>
            <button className={styles.buttonSecondary}>Watch Trailer</button>
          </div>
        </div>
      </div>
    </div>
	);
}
