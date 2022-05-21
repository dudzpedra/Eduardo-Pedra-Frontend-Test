import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Category from "./category";
import Product from "./product";
import Cart from "./cart";
import { connect } from "react-redux";
import { getCategories } from "../store/categoriesActions";

class AppRoutes extends Component {
  componentDidMount() {
    this.props.getCategories();
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
                  element={<Category category={category} />}
                />
              ))}
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categoriesList,
});

const mapDispatchToProps = { getCategories };

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);
