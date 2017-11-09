import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.css';
import search from '../../assets/img/svg/search.svg';

let NormalHeader = (props) => {
	const baseStyles = {
		open: {
			width: 300,
			padding: '4px 10px',
			transition: 'width 0.75s cubic-bezier(0.000, 0.795, 0.000, 1.000)'
		},
		closed: {
			width: 0,
			padding: '4px 0',
			transition: 'width 0.75s cubic-bezier(0.000, 0.795, 0.000, 1.000)'
		}
	};

	let textStyle = props.isOpen 
		? baseStyles.open 
		: baseStyles.closed;

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
					<img className={styles.icon} src={search} />
				</span>
			</div>
		</nav>
	);
};

let StickyHeader = (props) => {
	const baseStyles = {
		open: {
			width: 300,
			padding: '4px 10px',
			transition: 'width 0.75s cubic-bezier(0.000, 0.795, 0.000, 1.000)'
		},
		closed: {
			width: 0,
			padding: '4px 0',
			transition: 'width 0.75s cubic-bezier(0.000, 0.795, 0.000, 1.000)'
		}
	};

	const stickyStyles = {
		visible: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			width: '100%',
			zIndex: 2
		},
		novisible: {
			top: -60,
		}
	};

	let textStyle = props.isOpen 
		? baseStyles.open 
		: baseStyles.closed;

	let navSticky = props.isSticky
		? stickyStyles.visible
		: stickyStyles.novisible;

	return(
		<nav className={styles.nav} style={navSticky}>
			<div className={styles.browser}>
				<Link to='/search'>Browser</Link>
			</div>
			<div className={styles.search}>
				<form className={styles.searchForm} onSubmit={props.goToSearch}>
					<input type='text' style={textStyle} onChange={props.handleSearchTermChange} value={props.searchTerm} placeholder='Search' />
				</form>
				<span onClick={() => props.onClick()}>
					<img className={styles.icon} src={search} />
				</span>
			</div>
		</nav>
	);
};

export default function Navigation(props) {
	return (
		<div>
			<NormalHeader onClick={props.onClick} isOpen={props.isOpen} />
			<StickyHeader onClick={props.onClick} isOpen={props.isOpen} isSticky={props.isSticky} />
		</div>
	);
}
