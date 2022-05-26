import React, { Component } from "react";
import { ThumbnailWrapper } from "./styles/Wrapper";
import { setImageIndex } from '../../../store/actions/productActions'
import { connect } from "react-redux";

class Thumbnail extends Component {
  handleClick = (id) => {
    this.props.setImageIndex(id)
  }
  render() {
    return (
      <ThumbnailWrapper
        key={this.props.image}
        src={this.props.image}
        alt={this.props.alt}
        onClick={() => this.handleClick(this.props.index)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  selectedIndex: state.products.selectedImageIndex
})

const mapDispatchToProps = { setImageIndex }

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);
