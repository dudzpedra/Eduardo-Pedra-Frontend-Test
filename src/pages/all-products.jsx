import React, { Component } from "react";
import { connect } from "react-redux";
import { setAllProducts } from "../store/categoriesActions";
import ProductList from "../components/ProductList";
import Loading from "../components/ui/Loading";
import { AllProductsWrapper } from "../styles/all_products/Wrapper";

class AllProducts extends Component {
  componentDidMount() {
    this.props.setAllProducts('all');
  }

  render() {
    return (
      <div>
        {this.props.all ? (
          <AllProductsWrapper>
            <h1>All Products</h1>
            <ProductList products={this.props.all.products} />
          </AllProductsWrapper>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  all: state.categories.all,
});

const mapDispatchToProps = { setAllProducts };

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
