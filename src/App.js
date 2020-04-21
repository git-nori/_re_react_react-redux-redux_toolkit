import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import HomeTemplate from './templates/HomeTmp'
import QuizTemplate from './templates/QuizTmp'
import Header from './organisms/Header'

function App () {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/home" component={HomeTemplate} />
        <Route exact path="/quiz" component={QuizTemplate} />
      </Switch>
    </Router>
  );
}

export default App;
