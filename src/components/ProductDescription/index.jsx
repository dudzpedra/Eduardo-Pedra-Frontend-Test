import React, { Component } from "react";
import { connect } from "react-redux";

class ProductDescription extends Component {
  render() {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: this.props.description }}
      ></div>
    );
  }
}

const mapStateToProps = (state) => ({
  description: state.products.product.description
})

export default connect(mapStateToProps)(ProductDescription);
