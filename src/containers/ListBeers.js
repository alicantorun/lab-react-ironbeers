import React, { Component } from "react";
import Navbar from "../components/Navbar";
import BeerList from "../components/BeerList";

export default class ListBeers extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BeerList />
      </div>
    );
  }
}
