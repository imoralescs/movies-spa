import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from'../Main';
import Navigation from '../../components/Navigation';

export default function Landing(props) {
	console.log(props);
	return (
		<div>
			<nav>
				<Navigation/>
			</nav>
			<Switch>
				<Route exact path="/" component={Main}/>
			</Switch>
		</div>
	);
}
