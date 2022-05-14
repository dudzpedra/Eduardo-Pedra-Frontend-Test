import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Actions } from "./styles/Actions";
import { Navigation } from "./styles/Navigation";
import { HeaderWrapper } from "./styles/Wrapper";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Navigation>
          <Link to="/all">All</Link>
          <Link to="/clothes">Clothes</Link>
          <Link to="/tech">Tech</Link>
        </Navigation>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Actions>
          <div>$</div>
          <div>cart</div>
        </Actions>
      </HeaderWrapper>
    );
  }
}

export default Header;
