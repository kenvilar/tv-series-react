import React, {Component} from 'react';
import Intro from '../Intro';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
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
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">TV Series List</h1>
				</header>
				<Intro message="Here you can find all of your most favorite series."/>
				The length of series of array - {this.state.series.length}
			</div>
		);
	}
}

export default App;
