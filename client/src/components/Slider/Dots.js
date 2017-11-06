import React from 'react';

export default function Dots({ active, selectSlide }) {
	let activeClass;
	active == undefined
		? activeClass = ''
		: activeClass = active;
	return (
    <li className={activeClass + ' dots' } onClick={selectSlide}>
      <a>&#9679;</a>
    </li>
	);
}
