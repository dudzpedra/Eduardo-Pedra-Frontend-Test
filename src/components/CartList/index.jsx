import React, { Component } from "react";
import CartItem from "../CartItem";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartActions";
import { Link } from "react-router-dom";

class CartList extends Component {
  render() {
    return (
      <>
        {this.props.cart.length > 0 ? (
          <div style={{ width: "100%" }}>
            {this.props.cart.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                add={this.props.addToCart}
                remove={this.props.removeFromCart}
              />
            ))}
          </div>
        ) : (
          <div>
            <p>Your cart is empty.</p>
            <p>
              <Link to='/all'>Go back to home page</Link>
            </p>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.items,
});

const mapDispatchToProps = { addToCart, removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
