import React, { Component } from "react";
import { connect } from "react-redux";
import { Markup } from "interweave";

class ProductDescription extends Component {
  render() {
    return (
      <>
        <Markup content={this.props.description} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  description: state.products.product.description,
});

export default connect(mapStateToProps)(ProductDescription);
