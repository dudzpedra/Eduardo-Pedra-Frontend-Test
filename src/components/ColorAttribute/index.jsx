import React, { Component } from "react";

class ColorAttribute extends Component {
  render() {
    return (
      <div>
        <strong>{this.props.attribute.name.toUpperCase()}:</strong>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.props.attribute.items.map((item) => (
            <p
              style={{
                marginRight: 5,
                backgroundColor: item.value,
                width: 30,
                height: 30
              }}
              key={item.id}
            ></p>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorAttribute;
