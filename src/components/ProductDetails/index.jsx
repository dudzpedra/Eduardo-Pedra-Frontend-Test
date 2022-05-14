import React, { Component } from "react";
import ProductAttributes from "../ProductAttributes";
import { DetailsWrapper } from "./styles/Wrapper";

class ProductDetails extends Component {
  render() {
    return (
      <DetailsWrapper>
        <h4>{this.props.product.brand}</h4>
        <h5>{this.props.product.name}</h5>
        <ProductAttributes attributes={this.props.product.attributes} />
        <div>
          <h6>PRICE:</h6>
          <p>
            {this.props.product.prices[0].currency.symbol}{" "}
            {this.props.product.prices[0].amount}
          </p>
        </div>
        <button style={{ background: 'green', color: '#fff', padding: '1rem 2rem'}}>ADD TO CART</button>
        <div
          dangerouslySetInnerHTML={{ __html: this.props.product.description }}
        ></div>
      </DetailsWrapper>
    );
  }
}

export default ProductDetails;
