import React, { Component } from "react";
import { QuantityWrapper } from "./styles/Wrapper";

class ProductQuantity extends Component {
  render() {
    return (
      <QuantityWrapper>
        <button onClick={this.props.add}>+</button>
        <p>{this.props.product.quantity}</p>
        <button onClick={this.props.remove}>-</button>
      </QuantityWrapper>
    );
  }
}

export default ProductQuantity;
