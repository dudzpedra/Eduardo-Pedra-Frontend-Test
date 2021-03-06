import React, { Component } from "react";
import {
  SwatchContent,
  AttributeName,
  SwatchContentWrapper,
  SwatchList,
  SwatchListWrapper,
} from "./styles";

class CartSwatchAttribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIds: this.props.item.selectedAttributes.map((att) =>
        att.items.map((item) => item.id).join()
      ),
    };
  }
  render() {
    return (
      <SwatchListWrapper>
        <AttributeName>{this.props.attribute.name}:</AttributeName>
        <SwatchList>
          {this.props.attribute.items.map((item) => (
            <SwatchContentWrapper
              key={item.id}
              selected={
                this.state.selectedIds.find((id) => id === item.id)
                  ? true
                  : false
              }
            >
              <SwatchContent displayColor={item.value} />
            </SwatchContentWrapper>
          ))}
        </SwatchList>
      </SwatchListWrapper>
    );
  }
}

export default CartSwatchAttribute;
