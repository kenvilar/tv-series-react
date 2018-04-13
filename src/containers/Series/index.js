import React, {Component} from 'react';

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

	render() {
		return (
			<div>
				The length of series of array - {this.state.series.length}
			</div>
		);
	}
}


export default Series;
