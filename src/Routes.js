import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
import About from "./About/About";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/about" exact component={About} />
               </Switch>
            </Router>
        )
    }
}