import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt="" />

        <Link to={this.props.path}>
          <h1>{this.props.name}</h1>
        </Link>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
