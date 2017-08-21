import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Diagram from './Diagram';
import './App.css';

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/diagram" component={Diagram} />
            <Route default component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
