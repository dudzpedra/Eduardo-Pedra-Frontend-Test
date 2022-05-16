import React, { Component } from "react";
import { ButtonWrapper } from "./styles/Wrapper";

class AddToCartButton extends Component {
  render() {
    return (
      <ButtonWrapper onClick={this.props.onClick}>ADD TO CART</ButtonWrapper>
    );
  }
}

export default AddToCartButton;
