import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CartWrapper } from '../styles/cart/Wrapper';

class Cart extends Component {
  componentDidUpdate() {
    console.log(this.props.cart);
  }
  render() {
    return (
      <CartWrapper>
        <h1>CART</h1>
        <hr />
        {this.props.cart.map(p => (
          <div key={p.id}>
            <p>{p.name}</p>
          </div>
        ))}
      </CartWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.items
})
//const mapDispatchToProps = {  }

export default connect(mapStateToProps)(Cart)