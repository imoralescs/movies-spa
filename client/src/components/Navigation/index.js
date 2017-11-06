import React from 'react';
import { Link } from 'react-router-dom';
import styles from './lesson.css';

export default function Navigation(props) {
	return (
		<div>
			<div className={styles.browser}>
				<Link to='/search'>Browser</Link>
			</div>
			<form onSubmit={props.goToSearch}>
				<input type='text' onChange={props.handleSearchTermChange} value={props.searchTerm} placeholder='Search' />
			</form>
		</div>
	);
}
