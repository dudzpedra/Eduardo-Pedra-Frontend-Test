import React, { Component } from "react";
import { connect } from "react-redux";
import { AttributeContent } from "./styles/Content";
import { AttributeWrapper } from "./styles/Wrapper";
import { selectAttribute } from "../../store/cartActions";

class AttributeSet extends Component {
  handleClick = (attribute) => {
    console.log(attribute);
    this.props.selectAttribute(attribute)
  };
  render() {
    return (
      <div>
        <strong>{this.props.attribute.name.toUpperCase()}:</strong>
        <AttributeWrapper>
          {this.props.attribute.items.map((item) => (
            <AttributeContent
              key={item.id}
              onClick={() => this.handleClick(item)}
              /* style={{
                background: this.state.isSelected && "#000",
                color: this.state.isSelected && "#fff",
              }} */
            >
              {item.value}
            </AttributeContent>
          ))}
        </AttributeWrapper>
        {/* {this.props.selectedAttributes.map(att => (
          <p key={att.id}>{att.name}</p>
        ))} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedAttributes: state.cart.selectedAttributes
})
const mapDispatchToProps = { selectAttribute };

export default connect(mapStateToProps, mapDispatchToProps)(AttributeSet);
