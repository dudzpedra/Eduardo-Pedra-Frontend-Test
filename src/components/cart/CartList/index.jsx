import React, { Component } from "react";
import CartCheckout from "../CartCheckout";
import CartItem from "../CartItem";
import { ListWrapper } from "./styles/Wrapper";

class CartList extends Component {
  render() {
    return (
      <ListWrapper>
        {this.props.cart.map((item) => (
          <CartItem
            key={item.id}
            product={item}
            add={this.props.add}
            remove={this.props.remove}
          />
        ))}
        <CartCheckout />
      </ListWrapper>
    );
  }
}

export default CartList;
