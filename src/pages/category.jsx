import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategory } from "../store/actions/categoriesActions";
import ProductList from "../components/ProductList";
import { CategoryWrapper, CategoryTitle } from "../assets/styles/category";

class Category extends Component {
  componentDidMount() {
    this.props.getCategory(this.props.name);
  }
  componentDidUpdate() {
    this.props.getCategory(this.props.name);
  }

  render() {
    return (
      <CategoryWrapper>
        {this.props && (
          <>
            <CategoryTitle>
              {this.props.name.toUpperCase()}
            </CategoryTitle>
            <ProductList products={this.props.products} />
          </>
        )}
      </CategoryWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.categories.category.products
})
const mapDispatchToProps = { getCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Category);
