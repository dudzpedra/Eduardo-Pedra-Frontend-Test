import React, { Component } from 'react'
import ProductBrand from '../ProductBrand'
import ProductName from '../ProductName'

class ProductHeader extends Component {
  render() {
    return (
      <div>
        <ProductBrand brand={this.props.product.brand} />
        <ProductName name={this.props.product.name} />
      </div>
    )
  }
}

export default ProductHeader