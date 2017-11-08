import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.css';

export default function NormalHeader(props) {
	return(
		<nav className={styles.nav}>
			<div className={styles.browser}>
				<Link to='/search'>Browser</Link>
			</div>
			<div className={styles.search}>
				<form className={styles.searchForm} onSubmit={props.goToSearch}>
					<input type='text' style={textStyle} onChange={props.handleSearchTermChange} value={props.searchTerm} placeholder='Search' />
				</form>
				<span onClick={() => props.onClick()}>
					<img className={styles.icon} style={baseStyles.icon} src={search} />
				</span>
			</div>
		</nav>
	)
}