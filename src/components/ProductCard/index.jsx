import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductPrice from "../ProductPrice";
import { Image } from "./styles/Image";
import { Card, Content } from "./styles/Wrapper";

class ProductCard extends Component {
  render() {
    return (
      <Link to={"/products/" + this.props.product.id}>
        <Card>
          <Image
            src={this.props.product.gallery[0]}
            alt={this.props.product.name}
          />
          <Content>
            <p>
              {this.props.product.brand} {this.props.product.name}
            </p>
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

export default connect(mapStateToProps)(ProductCard);
