import React, {Component} from 'react';
import Intro from './components/Intro';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">TV Series List</h1>
				</header>
				<Intro message="Here you can find all of your most favorite series." />
			</div>
		);
	}
}

export default App;
