import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
            <img
              src={item.gallery[this.props.imgIndex]}
              alt={item.name}
              width="40%"
            />
          </MiniCartContent>
        ))}
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
          <p><strong>Total</strong></p>
          <p><strong>{this.props.total[this.props.priceIndex]}</strong></p>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'space-between' }}>
          <Link to="/cart">
            <div
              style={{
                border: "1px solid rgba(29, 31, 34, 1)",
                background: "#fff",
                padding: "1rem 2rem",
                width: '40%'
              }}
              onClick={this.props.close}
            >
              VIEW BAG
            </div>
          </Link>
          <div
            style={{
              border: "1px solid rgba(29, 31, 34, 1)",
              background: "rgba(94, 206, 123, 1)",
              padding: "1rem 2rem",
              width: '40%'
            }}
            onClick={this.props.close}
          >
            CHECKOUT
          </div>
        </div>
      </MiniCartWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  priceIndex: state.currency.selectedIndex,
  imgIndex: state.products.selectedImageIndex,
  total: state.cart.total
});

export default connect(mapStateToProps)(MiniCart);
