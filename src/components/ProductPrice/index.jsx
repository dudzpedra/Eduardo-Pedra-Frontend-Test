import React, { Component } from "react";

class ProductPrice extends Component {
  render() {
    return (
      <div>
        <p>
          <strong>
            {this.props.prices.currency.symbol} {this.props.prices.amount}
          </strong>
        </p>
      </div>
    );
  }
}

export default ProductPrice;
