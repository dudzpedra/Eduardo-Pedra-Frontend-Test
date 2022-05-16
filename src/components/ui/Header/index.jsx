import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Actions } from "./styles/Actions";
import { HeaderContent } from "./styles/Content";
import { Navigation } from "./styles/Navigation";
import { HeaderWrapper } from "./styles/Wrapper";
import logo from "../../../assets/a-logo.svg";
import cart from "../../../assets/cart.svg";

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
            <div>$</div>
            <Link to="/cart">
              <img src={cart} alt="Shopping Cart" />
            </Link>
          </Actions>
        </HeaderContent>
      </HeaderWrapper>
    );
  }
}

export default Header;
