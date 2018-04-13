import React from 'react';
import loaderSrc from '../../assets/loader.gif';

const Loader = (props) => (
	<div>
		<img style={{width: 200}} className="loader" src={loaderSrc} alt="loader" title="loader"/>
	</div>
);

export default Loader;
