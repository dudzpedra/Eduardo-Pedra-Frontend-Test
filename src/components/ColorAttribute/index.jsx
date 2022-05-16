import React, { Component } from "react";

class ColorAttribute extends Component {
  render() {
    return (
      <div>
        <h6>{this.props.attribute.name}:</h6>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.props.attribute.items.map((item) => (
            <p
              style={{
                margin: 5,
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
