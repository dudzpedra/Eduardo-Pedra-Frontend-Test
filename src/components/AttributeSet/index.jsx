import React, { Component } from "react";

class AttributeSet extends Component {
  render() {
    return (
      <div key={this.props.attribute.id}>
        <h6>{this.props.attribute.name}:</h6>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.props.attribute.items.map((item) => (
            <p
              style={{ margin: 2, border: "1px solid", padding: 2 }}
              key={item.id}
            >
              {item.displayValue}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default AttributeSet;
