import React, { Component } from "react";
import { QuantityButton } from "./styles/Button";
import { QuantityWrapper } from "./styles/Wrapper";

class ProductQuantity extends Component {
  render() {
    return (
      <QuantityWrapper>
        <QuantityButton onClick={this.props.add}>+</QuantityButton>
        <p>{this.props.quantity}</p>
        <QuantityButton onClick={this.props.remove}>-</QuantityButton>
      </QuantityWrapper>
    );
  }
}

export default ProductQuantity;
