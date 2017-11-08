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
			padding: 0,
			transition: 'width 0.75s cubic-bezier(0.000, 0.795, 0.000, 1.000)'
		}
	};

	let textStyle = props.isOpen 
		? baseStyles.open 
		: baseStyles.closed;

	//textStyle = Object.assign(textStyle, props.additionalStyles ? props.additionalStyles.text : {});
	
	//const divStyle = Object.assign({}, textStyle, baseStyles.frame, props.additionalStyles ? props.additionalStyles.frame : {});
    //divStyle.width += baseStyles.icon.width + 5;

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
	);
};

export default function Navigation(props) {
	return (
		<NormalHeader onClick={props.onClick} isOpen={props.isOpen} />
	);
}
