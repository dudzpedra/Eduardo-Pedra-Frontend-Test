import React, { Component } from "react";
import { connect } from "react-redux";
import CartList from "../components/CartList";
import { CartWrapper } from "../styles/cart/Wrapper";
import { addToCart, removeFromCart } from "../store/cartActions";
import { Link } from "react-router-dom";

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
          <div>
            <p>Your cart is empty.</p>
            <p>
              <Link to="/">Go back to home page</Link>
            </p>
          </div>
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
