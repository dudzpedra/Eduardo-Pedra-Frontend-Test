import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategory } from "../store/actions/categoriesActions";
import ProductList from "../components/ProductList";
import Loading from "../components/ui/Loading";
import { CategoryWrapper } from "../styles/category/Wrapper";
import { CategoryTitle } from "../styles/category/Title";

class Category extends Component {
  componentDidMount() {
    this.props.getCategory(this.props.name);
  }

  render() {
    return (
      <CategoryWrapper>
        {this.props ? (
          <>
            <CategoryTitle>
              {this.props.name.toUpperCase()}
            </CategoryTitle>
            <ProductList products={this.props.products} />
          </>
        ) : (
          <Loading />
        )}
      </CategoryWrapper>
    );
  }
}

const mapDispatchToProps = { getCategory };

export default connect(() => ({}), mapDispatchToProps)(Category);
