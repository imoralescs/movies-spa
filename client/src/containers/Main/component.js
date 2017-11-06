import React from 'react';
import styles from './main.css';
import Slider from '../../components/Slider';

export default function Main(props) {
	return (
		<div className={styles.container}>
			<Slider
				nowPlaying={props.state.now_playing}
				autoplay={true}
				actions={false}
				timing={10000} />
				<h2>Upcoming</h2>
				{props.state.upcoming.map((movie) => {
					return(
						<div className={styles.upcoming} key={movie.id}>
							<img src={`https://image.tmdb.org/t/p/w1000${movie.poster_path}`} />
						</div>
					);
				})}
		</div>
	);
}
