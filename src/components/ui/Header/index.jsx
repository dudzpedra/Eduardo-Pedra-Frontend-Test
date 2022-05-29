import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Actions, CartAction, CartQuantity } from "./styles/Actions";
import { HeaderContent } from "./styles/Content";
import { Navigation } from "./styles/Navigation";
import { HeaderWrapper } from "./styles/Wrapper";
import logo from "../../../assets/images/a-logo.svg";
import cart from "../../../assets/images/cart.svg";
import CurrencySwitcher from "../../CurrencySwitcher";
import { connect } from "react-redux";
import CartOverlay from "../../cart/CartOverlay";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () =>
    this.setState({
      open: true,
    });

  handleClose = () =>
    this.setState({
      open: false,
    });

  render() {
    return (
      <HeaderWrapper>
        <HeaderContent>
          <Navigation>
            {this.props.categories &&
              this.props.categories.map((category) => (
                <NavLink key={category.name} to={category.name === "all" ? "/" : "/" + category.name}>
                  {category.name.toUpperCase()}
                </NavLink>
              ))}
          </Navigation>
          <img src={logo} alt="Logo" />
          <Actions>
            <CurrencySwitcher />
            <CartAction
              onClick={() => this.setState({ open: !this.state.open })}
            >
              <img src={cart} alt="Shopping Cart" />
              {this.props.quantity > 0 && (
                <CartQuantity>{this.props.quantity}</CartQuantity>
              )}
            </CartAction>
            <CartOverlay open={this.state.open} onClose={this.handleClose} />
          </Actions>
        </HeaderContent>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  quantity: state.cart.quantity,
  categories: state.categories.categoriesList,
});

export default connect(mapStateToProps)(Header);
