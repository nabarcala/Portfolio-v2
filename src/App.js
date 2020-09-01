import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import './components/Stars.css';


function App() {
  return (
    <div className="App star-bg">

        <div id="stars"></div>
        <div id="more-stars"></div>
        <div id="even-more-stars3"></div>

      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
