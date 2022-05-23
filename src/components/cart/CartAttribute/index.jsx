import React, { Component } from "react";
import { AttributeContent } from "./styles/Content";
import { AttributeList } from "./styles/List";
import { AttributeName } from "./styles/Text";
import {
  AttributeContentWrapper,
  AttributeListWrapper,
} from "./styles/Wrapper";

class CartAttribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIds: this.props.item.selectedAttributes.map((att) =>
        att.name === this.props.attribute.name &&
        (att.items.length > 0 ? att.items.map((item) => item.id).join() : att.items.id)
      ),
    };
  }
  render() {
    return (
      <AttributeListWrapper>
        <AttributeName>{this.props.attribute.name}:</AttributeName>
        <AttributeList>
          {this.props.attribute.items.map((item) => (
            <AttributeContentWrapper
              key={item.id}
              selected={
                this.state.selectedIds.find((id) => id === item.id)
                  ? true
                  : false
              }
            >
              <AttributeContent>{item.value}</AttributeContent>
            </AttributeContentWrapper>
          ))}
        </AttributeList>
      </AttributeListWrapper>
    );
  }
}

export default CartAttribute;
