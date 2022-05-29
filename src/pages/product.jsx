import React, { Component } from "react";
import ImageList from "../components/ImageList";
import ProductDetails from "../components/ProductDetails";
import Loading from "../components/ui/Loading";
import ProductImage from "../components/ui/ProductImage";
import { ProductWrapper } from "../assets/styles/product/Wrapper";
import { getProduct } from "../store/actions/productActions";
import { connect } from "react-redux";

class Product extends Component {
  productId = window.location.pathname.replace("/", "");
  
  componentDidMount() {
    this.props.getProduct(this.productId);
  }

  render() {
    return (
      <>
        {this.props.product ? (
          <ProductWrapper>
            <ImageList {...this.props.product} />
            <ProductImage {...this.props.product} />
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
});

const mapDispatchToProps = { getProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
