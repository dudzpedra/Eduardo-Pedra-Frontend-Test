import React, { Component } from 'react'
import ProductBrand from '../ProductBrand'
import ProductName from '../ProductName'
import { ProductHeaderWrapper } from './styles/Wrapper'

class ProductHeader extends Component {
  render() {
    return (
      <ProductHeaderWrapper>
        <ProductBrand brand={this.props.brand} />
        <ProductName name={this.props.name} />
      </ProductHeaderWrapper>
    )
  }
}

export default ProductHeader