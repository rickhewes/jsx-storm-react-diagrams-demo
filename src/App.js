import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import DemoOne from './DemoOne';
import DemoTwo from './DemoTwo';
import DemoThree from './DemoThree';
import Menu from './Menu';
import './App.css';

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Switch>
            <Route path="/demo1" component={DemoOne} />
            <Route path="/demo2" component={DemoTwo} />
            <Route path="/demo3" component={DemoThree} />
            <Route component={Menu} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
