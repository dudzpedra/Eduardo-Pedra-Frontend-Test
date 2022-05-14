import React, { Component } from "react";
import { ThumbnailWrapper } from "./styles/Wrapper";

class Thumbnail extends Component {
  render() {
    return (
      <ThumbnailWrapper
        key={this.props.image}
        src={this.props.image}
        alt={this.props.alt}
      />
    );
  }
}

export default Thumbnail;
