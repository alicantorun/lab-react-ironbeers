import React, { Component } from "react";
import Beer from "../components/Beer.js";
import axios from "axios";

export default class BeerList extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    console.log("DID MOUNT");
    axios
      .get("https://ih-beer-api.herokuapp.com/beers")
      .then(response => {
        console.log("API RESPONSE");
        this.setState({ beers: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.beers);
    const elements = this.state.beers.map((beer, index) => {
      return <Beer key={index} beer={beer} />;
    });
    const elements10 = elements.slice(0, 10);
    return <div>{elements10}</div>;
  }
}
