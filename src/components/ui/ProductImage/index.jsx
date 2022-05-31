import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from './styles/Image'
import { ProductImageWrapper } from './styles/Wrapper'

class ProductImage extends Component {
  render() {
    return (
      <ProductImageWrapper>
        <Image src={this.props.gallery[this.props.index]} alt={this.props.name} />
      </ProductImageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  index: state.products.selectedImageIndex
})

export default connect(mapStateToProps)(ProductImage)