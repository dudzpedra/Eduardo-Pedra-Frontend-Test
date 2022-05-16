import React, { Component } from "react";
import { AttributeContent } from "./styles/Content";
import { AttributeWrapper } from "./styles/Wrapper";

class AttributeSet extends Component {
  render() {
    return (
      <div>
        <strong>{this.props.attribute.name.toUpperCase()}:</strong>
        <AttributeWrapper>
          {this.props.attribute.items.map((item) => (
            <AttributeContent key={item.id}>
              {item.displayValue}
            </AttributeContent>
          ))}
        </AttributeWrapper>
      </div>
    );
  }
}

export default AttributeSet;
