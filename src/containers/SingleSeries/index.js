import React, {Component} from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
	state = {
		show: null
	};

	componentDidMount() {
		const {id} = this.props.match.params;
		fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				this.setState({show: json});
			})
			.catch((ex) => {
				console.log('parsing failed', ex);
			});
	}

	render() {
		const {show} = this.state;
		return (
			<div>
				{
					show === null
					&&
					<Loader/>
				}
				{
					show !== null
					&&
					<div>
						<p>{show.name}</p>
						<p>Premiered - {show.premiered}</p>
						<p>Rating - {show.rating.average}</p>
						<p>Episodes - Total of {show._embedded.episodes.length} episodes</p>
						<p><img src={show.image.original} alt="single-series"/></p>
					</div>
				}
			</div>
		);
	}
}

export default SingleSeries;
