import React, { Component } from "react";
import AttributeSet from "../AttributeSet";
import ColorAttribute from "../ColorAttribute";
import { ProductAttributesWrapper } from "./styles/Wrapper";

class ProductAttributes extends Component {
  render() {
    return (
      <ProductAttributesWrapper>
        {this.props.attributes
          .filter((att) => att.type !== "swatch")
          .map((att) => (
            <AttributeSet key={att.id} attribute={att} item={this.props.item} />
          ))}
        {this.props.attributes
          .filter((att) => att.type === "swatch")
          .map((att) => (
            <ColorAttribute key={att.id} attribute={att} item={this.props.item} />
          ))}
      </ProductAttributesWrapper>
    );
  }
}

export default ProductAttributes;
