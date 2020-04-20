import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomeTemplate from './templates/HomeTmp'

function App () {
  return (
    <Router>
      <Link to="/home">Home</Link>

      <Switch>
        <Route exact path="/home" component={HomeTemplate} />
      </Switch>
    </Router>
  );
}

export default App;
