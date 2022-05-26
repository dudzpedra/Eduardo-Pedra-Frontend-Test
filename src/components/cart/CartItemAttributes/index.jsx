import React, { Component } from "react";
import CartAttribute from "../CartAttribute";
import CartSwatchAttribute from "../CartSwatchAttribute";
import { ItemAttributesWrapper } from "./styles/Wrapper";

class CartItemAttributes extends Component {
  render() {
    return (
      <ItemAttributesWrapper>
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
      </ItemAttributesWrapper>
    );
  }
}

export default CartItemAttributes;
