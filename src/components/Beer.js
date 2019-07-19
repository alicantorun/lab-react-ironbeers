import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Beer extends Component {
  render() {
    const link = `/beers/${this.props.beer._id}`;
    return (
      <div>
        <img src={this.props.beer.image_url} alt="" />
        <h1>{this.props.beer.name}</h1>
        <p>{this.props.beer.description}</p>
        <Link to={link}>Beer Details</Link>
      </div>
    );
  }
}
