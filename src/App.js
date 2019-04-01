import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import LandingPage from './containers/LandingPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>
      </div>
    );
  }
}

export default App;
