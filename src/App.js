import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Navbar from './Navbar';
import AllOrganisms from './AllOrganisms';
import SingleOrganism from './SingleOrganism';
import UserHome from './UserHome';
import logo from './logo.svg';
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
