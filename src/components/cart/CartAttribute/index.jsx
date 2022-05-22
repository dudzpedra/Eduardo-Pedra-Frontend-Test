import React, { Component } from "react";
import { AttributeContent } from "./styles/Content";
import { AttributeList } from "./styles/List";
import {
  AttributeContentWrapper,
  AttributeListWrapper,
} from "./styles/Wrapper";

class CartAttribute extends Component {
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
      <AttributeListWrapper>
        <p>{this.props.attribute.name}:</p>
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