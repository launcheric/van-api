import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import VanContainer from './containers/VanContainer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' components={VanContainer}>
          <IndexRoute component={VanContainer} />

        </Route>
      </Router>
    );
  }
}

export default App;
