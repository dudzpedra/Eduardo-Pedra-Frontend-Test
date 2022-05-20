import React, { Component } from "react";
import { connect } from "react-redux";
import ProductAttributes from "../ProductAttributes";
import ProductName from "../ProductName";
import ProductPrice from "../ProductPrice";
import ProductQuantity from "../ProductQuantity";
import { MiniCartContent } from "./styles/Content";
import { DetailsWrapper } from "./styles/Details";
import { MiniCartWrapper } from "./styles/Wrapper";

class MiniCart extends Component {
  handleAdd = (item) => {
    this.props.add(item);
  };

  handleRemove = (id) => {
    this.props.remove(id);
  };

  render() {
    return (
      <MiniCartWrapper>
        <h4>My Bag, {this.props.quantity} items</h4>
        {this.props.items.map((item) => (
          <MiniCartContent key={item.id}>
            <DetailsWrapper>
              <ProductName name={item.name} />
              <ProductPrice prices={item.prices[this.props.priceIndex]} />
              <ProductAttributes attributes={item.attributes} />
            </DetailsWrapper>
            <ProductQuantity
              product={item}
              add={() => this.handleAdd(item)}
              remove={() => this.handleRemove(item.id)}
            />
            <img src={item.gallery[this.props.imgIndex]} alt={item.name} width='40%' />
          </MiniCartContent>
        ))}
      </MiniCartWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  priceIndex: state.currency.selectedIndex,
  imgIndex: state.products.selectedImageIndex
});

export default connect(mapStateToProps)(MiniCart);
