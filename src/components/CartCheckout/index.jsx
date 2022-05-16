import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ButtonWrapper } from '../ui/AddToCartButton/styles/Wrapper'

class CartCheckout extends Component {
  render() {
    return (
      <div>
        <p>Tax 21%: $ {(this.props.total * 0.21).toFixed(2)} </p>
        <p>Quantity: {this.props.quantity} </p>
        <p>Total: $ {(this.props.total).toFixed(2)} </p>
        <ButtonWrapper>ORDER</ButtonWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  total: state.cart.total,
  quantity: state.cart.quantity
})

export default connect(mapStateToProps)(CartCheckout)