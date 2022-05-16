import React, { Component } from "react";
import { connect } from "react-redux";
import { setTechProducts } from "../store/categoriesActions";
import ProductList from "../components/ProductList";
import Loading from "../components/ui/Loading";
import { TechWrapper } from "../styles/tech/Wrapper";

class Tech extends Component {
  componentDidMount() {
    this.props.setTechProducts('tech');
  }

  render() {
    return (
      <TechWrapper>
        {this.props.tech ? (
          <>
            <h1>Tech Category</h1>
            <ProductList products={this.props.tech.products} />
          </>
        ) : (
          <Loading />
        )}
      </TechWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  tech: state.categories.tech,
});

const mapDispatchToProps = { setTechProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Tech);
