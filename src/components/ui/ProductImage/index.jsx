import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { ImageHover } from './styles/Hover'
import { Image } from './styles/Image'
import { ProductImageWrapper } from './styles/Wrapper'

class ProductImage extends Component {
  /* componentDidMount() {
    const cursor = document.getElementById('pointer')
    document.addEventListener('mousemove', (e) => {
      let x = e.clientX
      let y = e.clientY
      cursor.style.left = x + 'px'
      cursor.style.top = y + 'px'
    })
  } */
  render() {
    return (
      <ProductImageWrapper>
        <Image src={this.props.product.gallery[this.props.index]} alt={this.props.product.name} />
        {/* <ImageHover id='pointer'></ImageHover> */}
      </ProductImageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  index: state.products.selectedImageIndex
})

export default connect(mapStateToProps)(ProductImage)