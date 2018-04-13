import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const SeriesListItem = ({series}) => (
	<Link to={`/series/${series.show.id}`}>
		<li key={series.show.id}>{series.show.name}</li>
	</Link>
);

const SeriesList = (props) => {
	return (
		<div>
			<ul className="series-list-group">
				{props.list.map(series => (
					<SeriesListItem series={series} key={series.show.id}/>
				))}
			</ul>
		</div>
	);
};

export default SeriesList;
