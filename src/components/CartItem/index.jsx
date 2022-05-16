import React, { Component } from "react";
import ProductAttributes from "../ProductAttributes";
import ProductHeader from "../ProductHeader";
import ProductPrice from "../ProductPrice";
import { ItemContent } from "./styles/Content";
import { ItemWrapper } from "./styles/Wrapper";

class CartItem extends Component {
  render() {
    return (
      <ItemWrapper>
        <hr />
        <ItemContent>
          <div>
            <ProductHeader product={this.props.product} />
            <ProductAttributes attributes={this.props.product.attributes} />
            <ProductPrice prices={this.props.product.prices[0]} />
          </div>
          <div style={{ display: 'flex'}}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <button>+</button>
              <p>{this.props.product.quantity}</p>
              <button>-</button>
            </div>
            <img
              src={this.props.product.gallery[0]}
              alt={this.props.product.name}
              width={200}
              height='100%'
            />
          </div>
        </ItemContent>
      </ItemWrapper>
    );
  }
}

export default CartItem;
