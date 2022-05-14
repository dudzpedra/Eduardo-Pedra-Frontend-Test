import React, { Component } from "react";
import AttributeSet from "../AttributeSet";

class ProductAttributes extends Component {
  render() {
    return (
      <div>
        {this.props.attributes.map((att) => (
          <AttributeSet attribute={att} />
        ))}
      </div>
    );
  }
}

export default ProductAttributes;
