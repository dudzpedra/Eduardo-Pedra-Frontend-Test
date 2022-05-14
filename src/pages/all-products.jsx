import React, { Component } from "react";
import GET_ALL_PRODUCTS from "../api/operations/get-all-products";
import ProductList from "../components/ProductList";
import Loading from "../components/ui/Loading";
import client from "../utils/client";

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: null,
    };
  }

  componentDidMount() {
    const getAll = async () => {
      try {
        const { data } = await client.query({
          query: GET_ALL_PRODUCTS,
        });
        if (data) {
          this.setState({ all: data.category });
        }
      } catch (e) {
        console.error(e);
      }
    };
    getAll();
  }

  render() {
    return (
      <div>
        <h1>All Products</h1>
        {this.state.all ? <ProductList products={this.state.all.products} /> : <Loading />}
      </div>
    );
  }
}

export default AllProducts;
