import React, {Component} from 'react';
import Intro from '../Intro';
import './App.css';

class App extends Component {
	state = {
		series: []
	};

	componentDidMount() {
		const series = ["Scorpion", "Vikings", "Game of Thrones"];

		setTimeout(() => {
			this.setState({ series: series });
		}, 2000);
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">TV Series List</h1>
				</header>
				<Intro message="Here you can find all of your most favorite series." />
				The length of series of array - {this.state.series.length}
			</div>
		);
	}
}

export default App;
