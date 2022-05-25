import React, { Component } from "react";
import { QuantityWrapper } from "./styles/Wrapper";
import { QuantityButton } from '../cart/CartItem/styles/Button'

class ProductQuantity extends Component {
  render() {
    return (
      <QuantityWrapper>
        <QuantityButton onClick={this.props.add}>+</QuantityButton>
        <p>{this.props.product.quantity}</p>
        <QuantityButton onClick={this.props.remove}>-</QuantityButton>
      </QuantityWrapper>
    );
  }
}

export default ProductQuantity;
