import React, { Component } from "react";
import { connect } from "react-redux";
import CartItemAttributes from "../CartItemAttributes";
import ProductHeader from "../../ProductHeader";
import ProductPrice from "../../ProductPrice";
import { ItemContent } from "./styles/Content";
import { ItemWrapper } from "./styles/Wrapper";
import ImageSlider from "../../ImageSlider";
import { ImageWrapper, ItemImage } from "./styles/Image";

class CartItem extends Component {
  handleAdd = () => {
    this.props.add(this.props.product);
  };

  handleRemove = () => {
    this.props.remove(this.props.product.id);
  };

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
                src={this.props.product.gallery[0]}
                alt={this.props.product.name}
              />
              <ImageSlider />
            </ImageWrapper>
          </div>
        </ItemContent>
      </ItemWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  index: state.currency.selectedIndex,
});

export default connect(mapStateToProps)(CartItem);
