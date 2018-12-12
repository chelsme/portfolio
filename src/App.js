import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './App.css';
import About from './screens/about'
import Projects from './screens/projects'
import Contact from './screens/contact'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <h1>Chelsea Crowson</h1>
              <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/projects">Projects</NavLink>
                <NavLink activeClassName="active" to="/contact">Contact</NavLink>
              </nav>
            </header>
            <div id="main">
              <img id='me' alt='profile pic' src={require('./images/profile.png')} />
              <Route exact path="/" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </div>
            <footer>&copy; Chelsea Crowson 2018. All rights reserved.</footer>
          </div>
        </Router>
      </div>
    );
  }
}