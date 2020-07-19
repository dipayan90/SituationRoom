import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Components/Navbar';
import Routes from './Routes';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Navigation />
            <Routes />
        </div>
    </Router>
    )
  }

}