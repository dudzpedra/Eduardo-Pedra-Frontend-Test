import React, { Component } from "react";
import { connect } from "react-redux";
import CartList from "../components/CartList";
import { CartWrapper } from "../styles/cart/Wrapper";

class Cart extends Component {
  componentDidUpdate() {
    console.log(this.props.cart);
  }
  render() {
    return (
      <CartWrapper>
        <h1>CART</h1>
        <CartList cart={this.props.cart} />
      </CartWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.items,
});

export default connect(mapStateToProps)(Cart);
