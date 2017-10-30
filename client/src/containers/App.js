import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from'./Landing';
import Search from'./Search';
//import styles from './app.css';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
	<Router basename=''>
		<div>
			<Switch>
				<Route exact path="/" component={Landing}/>
				<Route path="/search" component={Search} />
				<Route component={FourOhFour} />
			</Switch>
		</div>
	</Router>
);

App.propTypes = {};

export default App;
