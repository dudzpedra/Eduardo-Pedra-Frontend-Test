import React, { Component } from "react";
import { Link } from "react-router-dom";

class EmptyCart extends Component {
  render() {
    return (
      <div>
        <p>Your cart is empty.</p>
        <p>
          <Link to="/">Go back to home page</Link>
        </p>
      </div>
    );
  }
}

export default EmptyCart