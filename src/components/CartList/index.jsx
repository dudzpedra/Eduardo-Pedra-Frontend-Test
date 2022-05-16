import React, { Component } from "react";
import CartItem from "../CartItem";

class CartList extends Component {
  render() {
    return (
      <div style={{ width: '100%'}}>
        {this.props.cart.map((p) => (
          <CartItem key={p.id} product={p} />
        ))}
      </div>
    );
  }
}

export default CartList;
