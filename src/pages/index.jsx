import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Category from "./category";
import Product from "./product";
import Cart from "./cart";
import { connect } from "react-redux";
import { getCategories, getCategory } from "../store/actions/categoriesActions";

let isFirstRender = true;

class AppRoutes extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  componentDidUpdate() {
    if (isFirstRender) {
      this.props.getCategory(this.props.category.name)
      isFirstRender = false
    }
  }
  render() {
    return (
      <Router>
        <div id="portal"></div>
        <Routes>
          <Route path="/" element={<App />}>
            {this.props.categories &&
              this.props.categories.map((category) => (
                <Route
                  key={category.name}
                  path={category.name !== "all" && `/${category.name}`}
                  index={category.name === "all" ? true : false}
                  element={<Category name={category.name} />}
                />
              ))}
            <Route path="/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categoriesList,
  category: state.categories.category
});

const mapDispatchToProps = { getCategories, getCategory };

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);
