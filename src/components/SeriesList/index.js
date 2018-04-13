import React from 'react';
import './index.css';

const SeriesList = (props) => {
	return (
		<div>
			<ul className="series-list-group">
				{props.list.map(series => (
					<li>{series.show.name}</li>
				))}
			</ul>
		</div>
	);
};

export default SeriesList;
