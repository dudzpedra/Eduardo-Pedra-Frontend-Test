import React, { Component } from "react";
import ProductAttributes from "../ProductAttributes";
import ProductPrice from "../ProductPrice";
import AddToCartButton from "../ui/AddToCartButton";
import { DetailsWrapper } from "./styles/Wrapper";
import { addToCart } from "../../store/cartActions";
import { getProduct } from "../../store/productActions";
import { connect } from "react-redux";
import ProductHeader from "../ProductHeader";
import ProductDescription from "../ProductDescription";

class ProductDetails extends Component {
  handleAdd = () => {
    const selectedAttributes = this.props.attributes;

    if (selectedAttributes.length > 0) {
      const productId = this.props.product.id;
      const attributeItemsIds = selectedAttributes.map(
        (att) => att.items[0].id
      );

      const newItemId = `${productId}-${attributeItemsIds
        .map((id) => id)
        .join("-")}`;

      const itemToAdd = {
        ...this.props.product,
        id: newItemId,
        attributes: selectedAttributes,
        quantity: 1,
      };

      this.props.addToCart(itemToAdd);

      alert("Product added to cart succesfully");

      let path = window.location.pathname;
      let id = path.replace("/products/", "");

      this.props.getProduct(id);
    } else {
      alert('You must select the attributes')
    }
  };

  componentDidMount() {
    console.log(this.props.attributes);
  }

  componentDidUpdate() {
    console.log(this.props.attributes);
  }

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
  index: state.currency.selectedIndex,
  attributes: state.products.selectedAttributes,
});
const mapDispatchToProps = { addToCart, getProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
