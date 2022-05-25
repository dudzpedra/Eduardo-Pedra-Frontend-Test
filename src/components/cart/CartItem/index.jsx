import React, { Component } from "react";
import { connect } from "react-redux";
import CartItemAttributes from "../CartItemAttributes";
import ProductHeader from "../../ProductHeader";
import ProductPrice from "../../ProductPrice";
import { ItemContent } from "./styles/Content";
import { ItemWrapper } from "./styles/Wrapper";
import ImageSlider from "../../ImageSlider";
import { ImageWrapper, ItemImage } from "./styles/Image";
import { selectImgIndex } from '../../../store/cartActions'

class CartItem extends Component {
  handleAdd = () => {
    this.props.add(this.props.product);
  };

  handleRemove = () => {
    this.props.remove(this.props.product.id);
  };

  handleNext = () => {
    let nextIndex = this.props.product.imgIndex + 1
    if (nextIndex > (this.props.product.gallery.length - 1)) {
      nextIndex = 0
    }
    this.props.selectImgIndex({imgIndex: nextIndex, id: this.props.product.id})
  }

  handlePrev = () => {
    let prevIndex = this.props.product.imgIndex - 1
    if (prevIndex < 0) {
      prevIndex = this.props.product.gallery.length - 1
    }
    this.props.selectImgIndex({imgIndex: prevIndex, id: this.props.product.id})
  }

  render() {
    return (
      <ItemWrapper>
        <hr />
        <ItemContent>
          <div>
            <ProductHeader product={this.props.product} />
            <CartItemAttributes item={this.props.product} />
            <ProductPrice
              prices={this.props.product.prices[this.props.index]}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "20%",
              gap: '.3rem',
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <button onClick={this.handleAdd}>+</button>
              <p>{this.props.product.quantity}</p>
              <button onClick={this.handleRemove}>-</button>
            </div>
            <ImageWrapper>
              <ItemImage
                src={this.props.product.gallery[this.props.product.imgIndex]}
                alt={this.props.product.name}
              />
              <ImageSlider next={this.handleNext} prev={this.handlePrev} />
            </ImageWrapper>
          </div>
        </ItemContent>
      </ItemWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  index: state.currency.selectedIndex
});

const mapDispatchToProps = { selectImgIndex }

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
