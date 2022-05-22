import React, { Component } from "react";
import { connect } from "react-redux";
import { DescriptionWrapper } from "./styles/Wrapper";

class ProductDescription extends Component {
  render() {
    return (
      <DescriptionWrapper
        dangerouslySetInnerHTML={{ __html: this.props.description }}
      ></DescriptionWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  description: state.products.product.description
})

export default connect(mapStateToProps)(ProductDescription);
