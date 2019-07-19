import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./containers/Home.js";
import ListBeers from "./containers/ListBeers.js";
import NewBeer from "./containers/NewBeer.js";
import RandomBeer from "./containers/RandomBeer.js";
import SingleBeer from "./containers/SingleBeer.js";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" component={ListBeers} />
            <Route exact path="/new-beer" component={NewBeer} />
            <Route exact path="/random-beer" component={RandomBeer} />
            <Route exact path="/beers/:beerId" component={SingleBeer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
