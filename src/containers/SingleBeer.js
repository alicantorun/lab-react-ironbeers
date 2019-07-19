import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Beer from "../components/Beer.js";
import axios from "axios";

export default class SingleBeer extends Component {
  state = {
    beer: []
  };

  componentDidMount() {
    console.log("DID MOUNT");
    axios
      .get(
        `https://ih-beer-api.herokuapp.com/beers/${
          this.props.match.params.beerId
        }`
      )
      .then(response => {
        console.log("API RESPONSE");
        this.setState({ beer: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.beer);

    return (
      <div>
        <Navbar />
        <div>
          <img src={this.state.beer.image_url} alt="" />
          <h1>{this.state.beer.name}</h1>
          <p>{this.state.beer.description}</p>
        </div>
      </div>
    );
  }
}
