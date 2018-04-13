import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';

class Series extends Component {
	state = {
		series: [],
		seriesName: '',
		isFetching: false
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
		this.setState({seriesName: e.target.value, isFetching: true});
		fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				this.setState({series: json, isFetching: false});
			})
			.catch((ex) => {
				console.log('parsing failed', ex);
			});

		console.log(e);
		console.log(e.target.value);
	};

	render() {
		const {series, seriesName, isFetching} = this.state;

		return (
			<div>
				The length of series of array - {this.state.series.length}
				<div>
					<input type="text" value={seriesName} onChange={this.onSeriesInputChange}/>
				</div>

				{
					!isFetching && series.length === 0 && seriesName.trim() === ''
					&&
					<p>Please enter series name into the input</p>
				}
				{
					!isFetching && series.length === 0 && seriesName.trim() !== ''
					&&
					<p>No tv series have been found with this name.</p>
				}
				{
					isFetching
					&&
					<Loader/>
				}
				{
					!isFetching
					&&
					<SeriesList list={this.state.series}/>
				}
			</div>
		);
	}
}


export default Series;
