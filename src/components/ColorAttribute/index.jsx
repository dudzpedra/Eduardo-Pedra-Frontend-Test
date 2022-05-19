import React, { Component } from "react";
import { ColorContent } from "./styles/Content";
import { ColorListWrapper, ColorWrapper } from "./styles/Wrapper";
import { selectAttribute } from "../../store/productActions";
import { connect } from "react-redux";

class ColorAttribute extends Component {
  handleClick = (itemId) => {
    this.props.selectAttribute({attribute: this.props.attribute, itemId: itemId})
  }
  render() {
    return (
      <div>
        <strong>{this.props.attribute.name.toUpperCase()}:</strong>
        <ColorListWrapper>
          {this.props.attribute.items.map((item) => (
            <ColorWrapper key={item.id} onClick={() => this.handleClick(item.id)}>
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

const mapStateToProps = (state) => ({
  selectedAttributes: state.products.selectedAttributes
})
const mapDispatchToProps = { selectAttribute };

export default connect(mapStateToProps, mapDispatchToProps)(ColorAttribute);
