import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Actions, CartAction, CartQuantity } from "./styles/Actions";
import { HeaderContent } from "./styles/Content";
import { Navigation } from "./styles/Navigation";
import { HeaderWrapper } from "./styles/Wrapper";
import logo from "../../../assets/a-logo.svg";
import cart from "../../../assets/cart.svg";
import CurrencySwitcher from "../../CurrencySwitcher";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderContent>
          <Navigation>
            <Link to="/">All</Link>
            <Link to="/clothes">Clothes</Link>
            <Link to="/tech">Tech</Link>
          </Navigation>
          <img src={logo} alt="Logo" />
          <Actions>
            <CurrencySwitcher />
            <Link to="/cart">
              <CartAction>
                <img src={cart} alt="Shopping Cart" />
                <CartQuantity>{this.props.quantity}</CartQuantity>
              </CartAction>
            </Link>
          </Actions>
        </HeaderContent>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  quantity: state.cart.quantity,
});

export default connect(mapStateToProps)(Header);
