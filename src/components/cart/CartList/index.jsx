import React, { Component } from "react";
import CartCheckout from "../CartCheckout";
import CartItem from "../CartItem";

class CartList extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        {this.props.cart.map((item) => (
          <CartItem
            key={item.id}
            product={item}
            add={this.props.add}
            remove={this.props.remove}
          />
        ))}
        <CartCheckout />
      </div>
    );
  }
}

export default CartList;
