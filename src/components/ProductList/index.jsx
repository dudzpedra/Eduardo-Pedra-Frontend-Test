import React, { Component } from "react";
import ProductCard from "../ProductCard";
import { ListWrapper } from "./styles/Wrapper";

class ProductList extends Component {
  render() {
    return (
      <ListWrapper>
        {this.props.products &&
          this.props.products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
      </ListWrapper>
    );
  }
}

export default ProductList;
