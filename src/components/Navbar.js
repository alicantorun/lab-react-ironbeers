import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-style">
        <Link to="/">Home</Link>
      </div>
    );
  }
}
