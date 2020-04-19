import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from './container/HomeContainer'

function App () {
  return (
    <Router>
      <Link to="/home">Home</Link>

      <Switch>
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
