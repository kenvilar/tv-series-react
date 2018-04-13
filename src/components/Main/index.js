import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Series from "../../containers/Series";

const Main = (props) => (
	<Switch>
		<Route exact path="/" component={Series}></Route>
	</Switch>
);

export default Main;
