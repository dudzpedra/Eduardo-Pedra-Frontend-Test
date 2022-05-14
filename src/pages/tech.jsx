import React, { Component } from "react";
import GET_TECH from "../api/operations/get-tech";
import ProductList from "../components/ProductList";
import Loading from "../components/ui/Loading";
import client from "../utils/client";

class Tech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tech: null,
    };
  }

  componentDidMount() {
    const getTech = async () => {
      try {
        const { data } = await client.query({ query: GET_TECH });
        if (data) {
          this.setState({ tech: data.category });
        }
      } catch (e) {
        console.error(e);
      }
    };
    getTech();
  }

  render() {
    return (
      <div>
        <h1>Tech Category</h1>
        {this.state.tech ? <ProductList products={this.state.tech.products} /> : <Loading />}
      </div>
    );
  }
}

export default Tech;
