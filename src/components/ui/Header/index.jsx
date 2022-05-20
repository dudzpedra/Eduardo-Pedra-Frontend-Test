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
import CartOverlay from "../../CartOverlay";

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
            <Link to="/">All</Link>
            <Link to="/clothes">Clothes</Link>
            <Link to="/tech">Tech</Link>
          </Navigation>
          <img src={logo} alt="Logo" />
          <Actions>
            <CurrencySwitcher />
            <CartAction onClick={() => this.setState({ open: !this.state.open })}>
              <img src={cart} alt="Shopping Cart" />
              {this.props.quantity > 0 && <CartQuantity>{this.props.quantity}</CartQuantity>}
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
});

export default connect(mapStateToProps)(Header);
