import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategory } from "../store/categoriesActions";
import ProductList from "../components/ProductList";
import Loading from "../components/ui/Loading";
import { CategoryWrapper } from "../styles/category/Wrapper";

class Category extends Component {
  componentDidMount() {
    this.props.getCategory(this.props.category.name);
  }

  render() {
    return (
      <CategoryWrapper>
        {this.props.category ? (
          <>
            <h1>{this.props.category.name.toUpperCase()}</h1>
            <ProductList products={this.props.category.products} />
          </>
        ) : (
          <Loading />
        )}
      </CategoryWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  tech: state.categories.tech,
});

const mapDispatchToProps = { getCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Category);
