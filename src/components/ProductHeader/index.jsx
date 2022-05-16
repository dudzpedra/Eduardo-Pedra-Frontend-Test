import React, { Component } from 'react'

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

export default ProductHeader