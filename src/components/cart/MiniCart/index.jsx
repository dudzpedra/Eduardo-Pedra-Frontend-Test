import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItemAttributes from "../CartItemAttributes";
import ProductPrice from "../../ProductPrice";
import ProductQuantity from "../../ProductQuantity";
import ProductHeader from "../../ProductHeader";
import TotalPrice from "../TotalPrice";
import {
  CartButton,
  CheckoutButton,
  DetailsWrapper,
  MiniCartSection,
  MiniCartWrapper,
} from "./styles";

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
        <strong>My Bag, {this.props.quantity} items</strong>
        {this.props.items.map((item) => (
          <MiniCartSection key={item.id}>
            <DetailsWrapper>
              <ProductHeader {...item} />
              <ProductPrice prices={item.prices[this.props.priceIndex]} />
              <CartItemAttributes item={item} />
            </DetailsWrapper>
            <ProductQuantity
              {...item}
              add={() => this.handleAdd(item)}
              remove={() => this.handleRemove(item.id)}
            />
            <img
              src={item.gallery[item.imgIndex]}
              alt={item.name}
              width="40%"
            />
          </MiniCartSection>
        ))}
        <MiniCartSection>
          <TotalPrice />
        </MiniCartSection>
        <MiniCartSection>
          <Link to="/cart">
            <CartButton onClick={this.props.close}>VIEW BAG</CartButton>
          </Link>
          <CheckoutButton onClick={this.props.close}>CHECKOUT</CheckoutButton>
        </MiniCartSection>
      </MiniCartWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  priceIndex: state.currency.selectedIndex,
});

export default connect(mapStateToProps)(MiniCart);
