import React, { Component } from "react";
import { connect } from "react-redux";
import { AttributeContent } from "./styles/Content";
import { AttributeWrapper } from "./styles/Wrapper";
import { selectAttribute } from "../../store/actions/productActions";

class AttributeSet extends Component {
  handleClick = (itemId) => {
    this.props.selectAttribute({
      attribute: this.props.attribute,
      itemId: itemId,
    });
  };

  render() {
    return (
      <div>
        <strong>{this.props.attribute.name.toUpperCase()}:</strong>
        <AttributeWrapper>
          {this.props.attribute.items.map((item, index) => (
            <AttributeContent
              key={index}
              onClick={() => this.handleClick(item.id)}
              selected={
                this.props.selectedAttributes
                  .map(
                    (att) =>
                      att.name === this.props.attribute.name &&
                      att.items.map((item) => item.id).join()
                  )
                  .find((id) => id === item.id)
                  ? true
                  : false
              }
            >
              {item.value}
            </AttributeContent>
          ))}
        </AttributeWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedAttributes: state.products.selectedAttributes,
});
const mapDispatchToProps = { selectAttribute };

export default connect(mapStateToProps, mapDispatchToProps)(AttributeSet);
