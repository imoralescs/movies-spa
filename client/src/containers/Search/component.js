import React from 'react';

export default function Search(props) {
	console.log(props);
	if(props.movies.length < 1) {
    return(
			<h1>Loading</h1>
		);
  }
	return (
		<div>
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
