import React, { Component } from "react";
import { connect } from "react-redux";
import { setAllProducts } from "../store/categoriesActions";
import ProductList from "../components/ProductList";
import Loading from "../components/ui/Loading";

class AllProducts extends Component {
  componentDidMount() {
    this.props.setAllProducts()
  }

  render() {
    return (
      <div>
        <h1>All Products</h1>
        {this.props.all ? (
          <ProductList products={this.props.all.products} />
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  all: state.categories.all
})

const mapDispatchToProps = {setAllProducts}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
