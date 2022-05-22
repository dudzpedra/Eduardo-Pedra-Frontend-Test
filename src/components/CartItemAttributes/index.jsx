import React, { Component } from "react";
import CartAttribute from "../cart/CartAttribute";
import CartSwatchAttribute from "../cart/CartSwatchAttribute";

class CartItemAttributes extends Component {
  render() {
    return (
      <div>
        {this.props.item.attributes
          .filter((att) => att.type !== "swatch")
          .map((att) => (
            <CartAttribute key={att.id} attribute={att} item={this.props.item} />
          ))}
        {this.props.item.attributes
          .filter((att) => att.type === "swatch")
          .map((att) => (
            <CartSwatchAttribute key={att.id} attribute={att} item={this.props.item} />
          ))}
      </div>
    );
  }
}

export default CartItemAttributes;
