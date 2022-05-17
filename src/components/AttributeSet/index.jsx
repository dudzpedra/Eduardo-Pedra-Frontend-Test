import React, { Component } from "react";
import { AttributeContent } from "./styles/Content";
import { AttributeWrapper } from "./styles/Wrapper";

class AttributeSet extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }
  handleClick = ({ target }) => {
    if (this.state.isSelected) {
      this.setState({
        isSelected: false,
      });
      target.style.background = "#fff";
      target.style.color = "#000";
    } else {
      this.setState({
        isSelected: true
      })
      target.style.background = "#000";
      target.style.color = "#fff";
    }
  }; */
  render() {
    return (
      <div>
        <strong>{this.props.attribute.name.toUpperCase()}:</strong>
        <AttributeWrapper>
          {this.props.attribute.items.map((item) => (
            <AttributeContent
              key={item.id}
              onClick={this.handleClick}
              /* style={{
                background: this.state.isSelected && "#000",
                color: this.state.isSelected && "#fff",
              }} */
            >
              {item.value}
            </AttributeContent>
          ))}
        </AttributeWrapper>
      </div>
    );
  }
}

export default AttributeSet;
