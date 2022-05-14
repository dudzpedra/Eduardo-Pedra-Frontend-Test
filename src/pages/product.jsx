import React, { Component } from "react";
import GET_PRODUCT from "../api/operations/get-product";
import ImageList from "../components/ImageList";
import ProductDetails from "../components/ProductDetails";
import Loading from "../components/ui/Loading";
import ProductImage from "../components/ui/ProductImage";
import { ProductWrapper } from "../styles/product/Wrapper";
import client from "../utils/client";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    let path = window.location.pathname;
    let id = path.replace("/products/", "");
    const getProduct = async (id) => {
      try {
        const { data } = await client.query({
          query: GET_PRODUCT,
          variables: { id: id },
        });
        if (data) {
          console.log(data.product);
          this.setState({ product: data.product });
        }
      } catch (e) {
        console.error(e);
      }
    };
    getProduct(id);
  }

  render() {
    return (
      <>
        {this.state.product ? (
          <ProductWrapper>
            <ImageList product={this.state.product} />
            <ProductImage product={this.state.product} />
            <ProductDetails product={this.state.product} />
          </ProductWrapper>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default Product;
