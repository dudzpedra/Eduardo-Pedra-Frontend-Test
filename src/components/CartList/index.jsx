import React, { Component } from "react";
import CartItem from "../CartItem";
import { connect } from "react-redux";
import { addToCart } from '../../store/cartActions'

class CartList extends Component {
  render() {
    return (
      <div style={{ width: '100%'}}>
        {this.props.cart.map((item) => (
          <CartItem key={item.id} product={item} add={this.props.addToCart} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.items,
});

const mapDispatchToProps = { addToCart }

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
