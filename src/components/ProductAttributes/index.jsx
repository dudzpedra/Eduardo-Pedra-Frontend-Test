import React, { Component } from "react";
import { connect } from "react-redux";
import AttributeSet from "../AttributeSet";
import ColorAttribute from "../ColorAttribute";

class ProductAttributes extends Component {
  render() {
    return (
      <div>
        {this.props.attributes.map((att) => (
          <>
            {att.name === "Color" ? (
              <ColorAttribute key={att.id} attribute={att} />
            ) : (
              <AttributeSet key={att.id} attribute={att} />
            )}
          </>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  attributes: state.products.product.attributes
})

export default connect(mapStateToProps)(ProductAttributes);
