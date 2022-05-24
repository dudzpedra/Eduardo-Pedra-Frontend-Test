import React, { Component } from "react";
import { ColorContent } from "./styles/Content";
import { ColorListWrapper, ColorWrapper } from "./styles/Wrapper";
import { selectAttribute } from "..//../../store/productActions";
import { connect } from "react-redux";

class ColorAttribute extends Component {
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
        <ColorListWrapper>
          {this.props.attribute.items.map((item) => (
            <ColorWrapper
              key={item.id}
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
              <ColorContent displayColor={item.value} />
            </ColorWrapper>
          ))}
        </ColorListWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedAttributes: state.products.selectedAttributes,
});
const mapDispatchToProps = { selectAttribute };

export default connect(mapStateToProps, mapDispatchToProps)(ColorAttribute);
