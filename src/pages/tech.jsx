import React, { Component } from "react";
import { connect } from "react-redux";
import { setTechProducts } from "../store/categoriesActions";
import ProductList from "../components/ProductList";
import Loading from "../components/ui/Loading";

class Tech extends Component {
  componentDidMount() {
    this.props.setTechProducts();
  }

  render() {
    return (
      <div>
        <h1>Tech Category</h1>
        {this.props.tech ? (
          <ProductList products={this.props.tech.products} />
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tech: state.categories.tech,
});

const mapDispatchToProps = { setTechProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Tech);
