import React, { Component } from "react";
import reactDom from "react-dom";
import { connect } from "react-redux";
import { ModalOverlay } from "./styles/Overlay";
import { ModalWrapper } from "./styles/Wrapper";
import { addToCart, removeFromCart } from "../../../store/cartActions";
import MiniCart from "../MiniCart";

class CartOverlay extends Component {
  render() {
    if (!this.props.open) return null;
    return reactDom.createPortal(
      <>
        <ModalOverlay onClick={this.props.onClose} />
        <ModalWrapper>
          <MiniCart
            quantity={this.props.quantity}
            items={this.props.items}
            add={this.props.addToCart}
            remove={this.props.removeFromCart}
            close={this.props.onClose}
          />
        </ModalWrapper>
      </>,
      document.getElementById("portal")
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cart.items,
  quantity: state.cart.quantity,
});

const mapDispatchToProps = { addToCart, removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
