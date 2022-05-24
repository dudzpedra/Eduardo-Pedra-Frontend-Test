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
    const productAttributesLength = this.props.product.attributes.length;

    if (selectedAttributes.length === productAttributesLength) {
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
        selectedAttributes: selectedAttributes,
        quantity: 1,
      };

      this.props.addToCart(itemToAdd);

      alert("Product added to cart succesfully");

      let path = window.location.pathname;
      let id = path.replace("/products/", "");

      this.props.getProduct(id);
    } else {
      alert("You must select the attributes");
    }
  };

  render() {
    return (
      <DetailsWrapper>
        <ProductHeader product={this.props.product} />
        <ProductAttributes attributes={this.props.product.attributes} />
        <div>
          <strong>PRICE:</strong>
          <ProductPrice prices={this.props.product.prices[this.props.index]} />
        </div>
        <AddToCartButton
          onClick={this.handleAdd}
          disabled={this.props.product.inStock ? false : true}
        />
        <ProductDescription />
      </DetailsWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  index: state.currency.selectedIndex,
  attributes: state.products.selectedAttributes,
});
const mapDispatchToProps = { addToCart, getProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
