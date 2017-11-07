import React from 'react';
import styles from './main.css';
import Slider from '../../components/Slider';

export default function Main(props) {
	return (
		<div className={styles.container}>
			<div className={styles.panel}>
				<Slider
					nowPlaying={props.state.nowplaying}
					autoplay={true}
					actions={false}
					timing={10000} />
			</div>
			<div className={styles.panel}>
				<h2 className={styles.title}>Upcoming</h2>
				<div className={styles.upcomingList}>
					{props.state.upcoming.map((movie) => {
						return(
							<div className={styles.upcoming} key={movie.id}>
								<img src={`https://image.tmdb.org/t/p/w1000${movie.poster_path}`} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
