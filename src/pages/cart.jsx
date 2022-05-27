import React, { Component } from "react";
import CartList from "../components/cart/CartList";
import EmptyCart from "../components/cart/EmptyCart";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../store/actions/cartActions";
import { CartWrapper } from "../styles/cart/Wrapper";

class Cart extends Component {
  render() {
    return (
      <CartWrapper>
        <h1>CART</h1>
        {this.props.cart.length > 0 ? (
          <CartList
            cart={this.props.cart}
            add={this.props.addToCart}
            remove={this.props.removeFromCart}
          />
        ) : (
          <EmptyCart />
        )}
      </CartWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.items,
});

const mapDispatchToProps = { addToCart, removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
