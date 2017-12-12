import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AllOrganisms from './components/AllOrganisms';
import SingleOrganism from './components/SingleOrganism';
import UserHome from './components/UserHome';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/organisms" component={AllOrganisms} />
              <Route path="/organisms/:organismId" component={SingleOrganism} />
              <Route exact path="/:userId" component={UserHome} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
