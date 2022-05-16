import React, { Component } from "react";
import { connect } from "react-redux";
import { setClothesProducts } from "../store/categoriesActions";
import ProductList from "../components/ProductList";
import Loading from "../components/ui/Loading";
import { ClothesWrapper } from "../styles/clothes/Wrapper";

class Clothes extends Component {
  componentDidMount() {
    this.props.setClothesProducts('clothes');
  }

  render() {
    return (
      <ClothesWrapper>
        {this.props.clothes ? (
          <>
            <h1>{this.props.clothes.name.toUpperCase()}</h1>
            <ProductList products={this.props.clothes.products} />
          </>
        ) : (
          <Loading />
        )}
      </ClothesWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  clothes: state.categories.clothes,
});

const mapDispatchToProps = { setClothesProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Clothes);
