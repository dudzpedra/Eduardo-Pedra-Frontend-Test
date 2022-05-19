import React, { Component } from "react";
import ImageList from "../components/ImageList";
import ProductDetails from "../components/ProductDetails";
import Loading from "../components/ui/Loading";
import ProductImage from "../components/ui/ProductImage";
import { ProductWrapper } from "../styles/product/Wrapper";
import { getProduct } from "../store/productActions";
import { connect } from "react-redux";

class Product extends Component {
  componentDidMount() {
    let path = window.location.pathname;
    let id = path.replace("/products/", "");
    this.props.getProduct(id);
  }

  render() {
    return (
      <>
        {this.props.product ? (
          <ProductWrapper>
            <ImageList product={this.props.product} />
            <ProductImage product={this.props.product} />
            <ProductDetails product={this.props.product} />
          </ProductWrapper>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.products.product,
  attributes: state.products.selectedAttributes,
});

const mapDispatchToProps = { getProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
