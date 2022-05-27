import React, { Component } from "react";
import { connect } from "react-redux";
import { ButtonWrapper } from "../../ui/AddToCartButton/styles/Wrapper";
import { CheckoutWrapper, OrderWrapper } from "./styles/Wrapper";

class CartCheckout extends Component {
  render() {
    return (
      <CheckoutWrapper>
        <p>
          Tax 21%:{" "}
          <strong>
            {this.props.symbol}{" "}
            {(this.props.total[this.props.index] * 0.21).toFixed(2)}
          </strong>{" "}
        </p>
        <p>
          Quantity: <strong>{this.props.quantity}</strong>{" "}
        </p>
        <p>
          Total:{" "}
          <strong>
            {this.props.symbol} {this.props.total[this.props.index].toFixed(2)}
          </strong>{" "}
        </p>
        <OrderWrapper>
          <ButtonWrapper>ORDER</ButtonWrapper>
        </OrderWrapper>
      </CheckoutWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.cart.total,
  quantity: state.cart.quantity,
  symbol: state.currency.selectedCurrency.symbol,
  index: state.currency.selectedIndex,
});

export default connect(mapStateToProps)(CartCheckout);
