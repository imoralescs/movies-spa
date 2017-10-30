import React from 'react';
import Navigation from '../../components/Navigation';

export default function Search(props) {
	if(props.movies.length < 1) {
		return(
			<h1>Loading</h1>
		);
	}
	return (
		<div>
			<nav>
				<Navigation/>
			</nav>
			{props.movies.map((movie) => {
				return(
					<div key={movie.id}>
						<h3>{movie.original_title}</h3>
					</div>
				);
			})}
		</div>
	);
}
