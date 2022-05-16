import React, { Component } from "react";
import ProductAttributes from "../ProductAttributes";
import ProductPrice from "../ProductPrice";
import AddToCartButton from "../ui/AddToCartButton";
import { DetailsWrapper } from "./styles/Wrapper";
import { addToCart } from "../../store/cartActions";
import { connect } from "react-redux";
import ProductHeader from "../ProductHeader";
import ProductDescription from "../ProductDescription";

class ProductDetails extends Component {
  handleAdd = () => {
    this.props.addToCart(this.props.product);
  };
  render() {
    return (
      <DetailsWrapper>
        <ProductHeader product={this.props.product} />
        <ProductAttributes attributes={this.props.product.attributes} />
        <strong>PRICE:</strong>
        <ProductPrice prices={this.props.product.prices[this.props.index]} />
        <AddToCartButton onClick={this.handleAdd} />
        <ProductDescription />
      </DetailsWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.products.product,
  index: state.currency.selectedIndex
});
const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
