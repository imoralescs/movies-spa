import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from'../Main';
import Navigation from '../../components/Navigation';
import styles from './landing.css';

export default function Landing(props) {
	console.log(props);
	return (
		<div className={styles.container}>
			<nav className={styles.nav}>
				<Navigation/>
			</nav>
			<div className={styles.billboard}></div>
			<Switch>
				<Route exact path="/" component={Main}/>
			</Switch>
		</div>
	);
}
