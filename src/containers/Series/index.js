import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
	state = {
		series: []
	};

	componentDidMount() {
		fetch('http://api.tvmaze.com/search/shows?q=Vikings')
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				this.setState({series: json});
			})
			.catch((ex) => {
				console.log('parsing failed', ex);
			});
	};

	onSeriesInputChange = (e) => {
		fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				this.setState({series: json});
			})
			.catch((ex) => {
				console.log('parsing failed', ex);
			});

		console.log(e);
		console.log(e.target.value);
	};

	render() {
		return (
			<div>
				The length of series of array - {this.state.series.length}
				<div>
					<input type="text" onChange={this.onSeriesInputChange}/>
				</div>
				<SeriesList list={this.state.series}/>
			</div>
		);
	}
}


export default Series;
