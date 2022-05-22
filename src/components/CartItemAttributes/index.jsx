import React, { Component } from "react";
import CartAttribute from "../cart/CartAttribute";
import CartSwatchAttribute from "../cart/CartSwatchAttribute";

class CartItemAttributes extends Component {
  render() {
    return (
      <div>
        {this.props.item.attributes.map((att) => (
          <div key={att.id}>
            {att.type === "swatch" ? (
              <CartSwatchAttribute attribute={att} item={this.props.item} />
            ) : (
              <CartAttribute attribute={att} item={this.props.item} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default CartItemAttributes;
