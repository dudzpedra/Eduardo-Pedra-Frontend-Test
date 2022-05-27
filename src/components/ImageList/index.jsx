import React, { Component } from "react";
import Thumbnail from "../ui/Thumbnail";
import { ListWrapper } from "./styles/Wrapper";

class ImageList extends Component {
  render() {
    return (
      <ListWrapper>
        {this.props.gallery.map((image, index) => (
          <Thumbnail key={image} index={index} image={image} alt={this.props.name} />
        ))}
      </ListWrapper>
    );
  }
}

export default ImageList;
