import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from'./Search';

const App = () => (
	<Router basename=''>
		<div>
			<Switch>
				<Route exact path="/" component={Landing}/>
				<Route exact path="/search" component={Search}/>
			</Switch>
		</div>
	</Router>
);

App.propTypes = {};

export default App;
