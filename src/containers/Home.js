import React, { Component } from "react";
import Header from "../components/Header.js";
var img1 = require("./img/beers.png");
var img2 = require("./img/new-beer.png");
var img3 = require("./img/random-beer.png");

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header
          name="All Beers"
          path="/beers"
          description="description"
          img={img1}
        />
        <Header
          name="Random Beer"
          path="/random-beer"
          description="description"
          img={img2}
        />
        <Header
          name="New Beer"
          path="/new-beer"
          description="description"
          img={img3}
        />
      </div>
    );
  }
}
