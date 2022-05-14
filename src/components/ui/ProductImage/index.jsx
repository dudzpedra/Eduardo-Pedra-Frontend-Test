import React, { Component } from 'react'
import { Image } from './styles/Image'
import { ProductImageWrapper } from './styles/Wrapper'

class ProductImage extends Component {
  render() {
    return (
      <ProductImageWrapper>
        <Image src={this.props.product.gallery[0]} alt={this.props.product.name} />
      </ProductImageWrapper>
    )
  }
}

export default ProductImage