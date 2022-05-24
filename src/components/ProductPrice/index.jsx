import React, { Component } from "react";
import { PriceWrapper } from "./styles/Wrapper";

class ProductPrice extends Component {
  render() {
    return (
      <PriceWrapper>
        {this.props.prices.currency.symbol} {this.props.prices.amount}
      </PriceWrapper>
    );
  }
}

export default ProductPrice;
