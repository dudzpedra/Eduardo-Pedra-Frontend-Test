import React, { Component } from "react";
import { Image } from "./styles/Image";
import { Card, Content } from "./styles/Wrapper";

class ProductCard extends Component {
  render() {
    return (
      <Card href={'/products/' + this.props.product.id}>
        <Image
          src={this.props.product.gallery[0]}
          alt={this.props.product.name}
        />
        <Content>
          <p>{this.props.product.name}</p>
          <p>{this.props.product.brand}</p>
        </Content>
        {/* <div
          dangerouslySetInnerHTML={{ __html: this.props.product.description }}
        ></div> */}
      </Card>
    );
  }
}

export default ProductCard;
