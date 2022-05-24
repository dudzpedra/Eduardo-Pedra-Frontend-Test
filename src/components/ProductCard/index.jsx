import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductPrice from "../ProductPrice";
import { Image } from "./styles/Image";
import { Card, Content, ImageWrapper } from "./styles/Wrapper";
import icon from "../../assets/add-to-cart.svg";
import { AddToCartIcon } from "./styles/Icon";
import { addToCart } from "../../store/cartActions";
import { OutOfStock, ProductTitle } from "./styles/Text";

class ProductCard extends Component {
  handleAdd = () => {
    const productId = this.props.product.id;

    const selectedAttributes = this.props.product.attributes.map((att) => ({
      ...att,
      items: att.items.slice(0, 1),
    }));

    const attributeItemsIds = selectedAttributes.map((att) => att.items[0].id);

    const newItemId = `${productId}-${attributeItemsIds
      .map((id) => id)
      .join("-")}`;

    const itemToAdd = {
      ...this.props.product,
      id: newItemId,
      selectedAttributes: selectedAttributes,
      quantity: 1,
    };

    this.props.addToCart(itemToAdd);
  };
  render() {
    return (
      <Link to={"/products/" + this.props.product.id}>
        <Card inStock={this.props.product.inStock}>
          <ImageWrapper>
            {!this.props.product.inStock && <OutOfStock>OUT OF STOCK</OutOfStock>}
            <Image
              src={this.props.product.gallery[0]}
              alt={this.props.product.name}
            />
            <AddToCartIcon
              src={icon}
              alt="Add to cart"
              id="add-to-cart-icon"
              onClick={this.handleAdd}
            />
          </ImageWrapper>
          <Content>
            <ProductTitle>
              {this.props.product.brand} {this.props.product.name}
            </ProductTitle>
            <ProductPrice
              prices={this.props.product.prices[this.props.index]}
            />
          </Content>
        </Card>
      </Link>
    );
  }
}

const mapStateToProps = (state) => ({
  index: state.currency.selectedIndex,
});

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
