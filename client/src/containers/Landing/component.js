import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing(props) {
	console.log(props);
	return (
		<div>
			<h1>Video</h1>
			<form onSubmit={props.goToSearch}>
				<input type='text' onChange={props.handleSearchTermChange} value={props.searchTerm} placeholder='Search' />
			</form>
			<Link to='/search'>or Browser All</Link>
		</div>
	);
}
