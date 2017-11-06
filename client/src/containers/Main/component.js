import React from 'react';
import styles from './main.css';
import Slider from '../../components/Slider';

export default function Main(props) {
	console.log(props);
	return (
    <div className={styles.container}>
			<Slider
				nowPlaying={props.state.now_playing}
				autoplay={true}
				actions={false}
				timing={20000} />
    </div>
	);
}
