import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItemAttributes from "../CartItemAttributes";
import ProductName from "../../ProductName";
import ProductPrice from "../../ProductPrice";
import ProductQuantity from "../../ProductQuantity";
import { CartButton, CheckoutButton } from "./styles/Actions";
import { MiniCartSection } from "./styles/Content";
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
        <strong>My Bag, {this.props.quantity} items</strong>
        {this.props.items.map((item) => (
          <MiniCartSection key={item.id}>
            <DetailsWrapper>
              <ProductName name={item.name} />
              <ProductPrice prices={item.prices[this.props.priceIndex]} />
              <CartItemAttributes item={item} />
            </DetailsWrapper>
            <ProductQuantity
              product={item}
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
          <p>
            <strong>Total</strong>
          </p>
          <p>
            <strong>{this.props.symbol} {this.props.total[this.props.priceIndex].toFixed(2)}</strong>
          </p>
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
  symbol: state.currency.selectedCurrency.symbol,
  total: state.cart.total,
});

export default connect(mapStateToProps)(MiniCart);
