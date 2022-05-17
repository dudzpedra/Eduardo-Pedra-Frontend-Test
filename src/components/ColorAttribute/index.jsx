import React, { Component } from "react";
import { ColorContent } from "./styles/Content";
import { ColorListWrapper, ColorWrapper } from "./styles/Wrapper";

class ColorAttribute extends Component {
  render() {
    return (
      <div>
        <strong>{this.props.attribute.name.toUpperCase()}:</strong>
        <ColorListWrapper>
          {this.props.attribute.items.map((item) => (
            <ColorWrapper key={item.id} onClick={() => alert('oi')}>
              <ColorContent
                style={{
                  backgroundColor: item.value,
                  border:
                    item.value === "#FFFFFF" ? "1px solid #000" : "transparent",
                }}
              ></ColorContent>
            </ColorWrapper>
          ))}
        </ColorListWrapper>
      </div>
    );
  }
}

export default ColorAttribute;
