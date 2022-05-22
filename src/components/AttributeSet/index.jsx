import React, { Component } from "react";
import { connect } from "react-redux";
import { AttributeContent } from "./styles/Content";
import { AttributeWrapper } from "./styles/Wrapper";
import { selectAttribute } from "../../store/productActions";

class AttributeSet extends Component {
  handleClick = (itemId) => {
    this.props.selectAttribute({
      attribute: this.props.attribute,
      itemId: itemId,
    });
  };

  componentDidUpdate() {
    if (this.props.selectedAttribute) console.log('attribute set did update', this.props.selectedAttribute.items[0].id);
  }

  render() {
    return (
      <div>
        <strong>{this.props.attribute.name.toUpperCase()}:</strong>
        <AttributeWrapper>
          {this.props.attribute.items.map((item) => (
            <AttributeContent
              key={item.id}
              onClick={() => this.handleClick(item.id)}
              style={{
                background: this.props.selectedAttribute && this.props.selectedAttribute.items[0].id === item.id ? "#000" : "#fff",
                color: this.props.selectedAttribute && this.props.selectedAttribute.items[0].id === item.id ? "#fff" : "#000",
              }}
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
  selectedAttribute: state.products.selectedAttributes[0],
});
const mapDispatchToProps = { selectAttribute };

export default connect(mapStateToProps, mapDispatchToProps)(AttributeSet);
