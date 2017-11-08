import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from'../Main';
import Navigation from '../Navigation';
import styles from './landing.css';

export default function Landing(props) {
	const animationStyle = {
		transition: 'width 0.75s cubic-bezier(0.000, 0.795, 0.000, 1.000)'
	};
	return (
		<div className={styles.container}>
			<Navigation 
				isOpen={props.isOpen}
				additionalStyles={{text: animationStyle, frame: animationStyle}}
				onClick={props.onClick} />
			<Switch>
				<Route exact path="/" component={Main}/>
			</Switch>
		</div>
	);
}
