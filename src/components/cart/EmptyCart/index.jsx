import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HomeLink } from "./styles/Link";

class EmptyCart extends Component {
  render() {
    return (
      <div>
        <p>Your cart is empty.</p>
        <p>
          Go back to <Link to="/"><HomeLink>Home page</HomeLink></Link>
        </p>
      </div>
    );
  }
}

export default EmptyCart