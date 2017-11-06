import React from 'react';

export default function Button({ display, classes, action, image }) {
	let style;
	!display
		? style = { display : 'none' }
		: style = {};
	return (
    <button className={classes} style={style} onClick={action} >
      <img src={image} />
    </button>
	);
}
