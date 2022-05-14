import React, { Component } from "react";
import Thumbnail from "../ui/Thumbnail";
import { ListWrapper } from "./styles/Wrapper";

class ImageList extends Component {
  render() {
    return (
      <ListWrapper>
        {this.props.product.gallery.map((image) => (
          <Thumbnail key={image} image={image} alt={this.props.product.name} />
        ))}
      </ListWrapper>
    );
  }
}

export default ImageList;
