import React, { Component } from "react";
import { connect } from "react-redux";

class TotalPrice extends Component {
  render() {
    return (
      <>
        <p>
          <strong>Total</strong>
        </p>
        <p>
          <strong>
            {this.props.symbol}{" "}
            {this.props.total[this.props.priceIndex].toFixed(2)}
          </strong>
        </p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  priceIndex: state.currency.selectedIndex,
  symbol: state.currency.selectedCurrency.symbol,
  total: state.cart.total,
});

export default connect(mapStateToProps)(TotalPrice);
