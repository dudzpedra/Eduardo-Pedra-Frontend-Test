import React, { Component } from "react";
import { AttributeContent } from "./styles/Content";
import { AttributeWrapper } from "./styles/Wrapper";

class AttributeSet extends Component {
  render() {
    return (
      <div>
        <h6>{this.props.attribute.name}:</h6>
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
