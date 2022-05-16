import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductHeader extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.product.brand}</h4>
        <h5>{this.props.product.name}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.products.product
})

export default connect(mapStateToProps)(ProductHeader)