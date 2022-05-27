import React, { Component } from "react";
import { connect } from "react-redux";
import CartItemAttributes from "../CartItemAttributes";
import ProductHeader from "../../ProductHeader";
import ProductPrice from "../../ProductPrice";
import { ItemWrapper } from "./styles/Wrapper";
import ImageSlider from "../../ImageSlider";
import { ImageWrapper, ItemImage } from "./styles/Image";
import { selectImgIndex } from "../../../store/actions/cartActions";
import ProductQuantity from "../../ProductQuantity";
import { ItemDetails } from "./styles/Details";
import { ItemDisplay } from "./styles/Display";

class CartItem extends Component {
  handleAdd = () => {
    this.props.add(this.props.product);
  };
  handleRemove = () => {
    this.props.remove(this.props.product.id);
  };
  selectImg = (imgIndex, id) => this.props.selectImgIndex({ imgIndex, id });
  handleNext = () => {
    let nextIndex = this.props.product.imgIndex + 1;
    if (nextIndex > this.props.product.gallery.length - 1) nextIndex = 0;
    this.selectImg(nextIndex, this.props.product.id);
  };
  handlePrev = () => {
    let prevIndex = this.props.product.imgIndex - 1;
    if (prevIndex < 0) prevIndex = this.props.product.gallery.length - 1;
    this.selectImg(prevIndex, this.props.product.id);
  };
  render() {
    return (
      <ItemWrapper>
        <ItemDetails>
          <ProductHeader {...this.props.product} />
          <ProductPrice prices={this.props.product.prices[this.props.index]} />
          <CartItemAttributes item={this.props.product} />
        </ItemDetails>
        <ItemDisplay>
          <ProductQuantity
            {...this.props.product}
            add={this.handleAdd}
            remove={this.handleRemove}
          />
          <ImageWrapper>
            <ItemImage
              src={this.props.product.gallery[this.props.product.imgIndex]}
              alt={this.props.product.name}
            />
            {this.props.product.gallery.length > 1 && (
              <ImageSlider next={this.handleNext} prev={this.handlePrev} />
            )}
          </ImageWrapper>
        </ItemDisplay>
      </ItemWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  index: state.currency.selectedIndex,
});

const mapDispatchToProps = { selectImgIndex };

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
