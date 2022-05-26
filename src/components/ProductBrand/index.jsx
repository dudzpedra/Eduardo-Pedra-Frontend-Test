import React, { Component } from 'react'
import { ProductBrandWrapper } from './styles/Wrapper'

class ProductBrand extends Component {
  render() {
    return <ProductBrandWrapper>{this.props.brand}</ProductBrandWrapper>
  }
}

export default ProductBrand