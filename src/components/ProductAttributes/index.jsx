import React, { Component } from "react";
import AttributeSet from "../AttributeSet";
import ColorAttribute from "../ColorAttribute";

class ProductAttributes extends Component {
  render() {
    return (
      <div>
        {this.props.attributes.map((att) => (
          <div key={att.id}>
            {att.name === "Color" ? (
              <ColorAttribute attribute={att} />
            ) : (
              <AttributeSet attribute={att} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default ProductAttributes;
