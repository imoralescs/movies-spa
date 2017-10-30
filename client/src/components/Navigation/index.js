import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
	return (
		<div>
			<Link to='/search'>Browser</Link>
			<form onSubmit={props.goToSearch}>
				<input type='text' onChange={props.handleSearchTermChange} value={props.searchTerm} placeholder='Search' />
			</form>
		</div>
	);
}