import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const getCurrentDate = () => {
	const date = new Date();

	return date.toDateString();
};
const greeting = <h1>This is a react app. <br/>Current Date: {getCurrentDate()}</h1>
ReactDOM.render(greeting, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
