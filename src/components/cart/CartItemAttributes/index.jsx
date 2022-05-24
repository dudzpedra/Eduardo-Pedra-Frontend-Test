import React, { Component } from "react";
import CartAttribute from "../CartAttribute";
import CartSwatchAttribute from "../CartSwatchAttribute";

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
