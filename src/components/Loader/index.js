import React from 'react';
import loaderSrc from '../../assets/loader.gif';
import './Loader.css';

const Loader = (props) => (
	<div>
		<img className="loader" src={loaderSrc} alt="loader-image" title="loader-image"/>
	</div>
);

export default Loader;
