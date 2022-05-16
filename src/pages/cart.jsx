import React, { Component } from "react";
import CartList from "../components/CartList";
import { CartWrapper } from "../styles/cart/Wrapper";

class Cart extends Component {
  render() {
    return (
      <CartWrapper>
        <h1>CART</h1>
        <CartList />
      </CartWrapper>
    );
  }
}

export default Cart;
