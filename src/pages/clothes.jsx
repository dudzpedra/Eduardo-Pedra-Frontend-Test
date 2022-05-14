import React, { Component } from "react";
import GET_CLOTHES from "../api/operations/get-clothes";
import ProductList from "../components/ProductList";
import Loading from "../components/ui/Loading";
import client from "../utils/client";

class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: null,
    };
  }
  componentDidMount() {
    const getClothes = async () => {
      try {
        const { data } = await client.query({ query: GET_CLOTHES });
        if (data) {
          this.setState({ clothes: data.category });
        }
      } catch (e) {
        console.error(e);
      }
    };
    getClothes();
  }

  render() {
    return (
      <div>
        <h1>Clothes</h1>
        {this.state.clothes ? (
          <ProductList products={this.state.clothes.products} />
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default Clothes;
