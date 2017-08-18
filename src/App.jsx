import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Diagram from './Diagram';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
	<BrowserRouter>
		<div className="app">
			<Switch>
				<Route path="/diagram" component={Diagram} />
				<Route default component={FourOhFour} />
			</Switch>
		</div>
	</BrowserRouter>
);

render(<App envVariable={global.myThing} />, document.getElementById('app'));
