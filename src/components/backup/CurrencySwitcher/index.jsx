import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrencies, setCurrency } from "../../store/currencyActions";
import { setIndex } from "../../store/cartActions";
import { CurrencyWrapper } from "./styles/Wrapper";
import { CurrencyOption } from "./styles/Option";

class CurrencySwitcher extends Component {
  componentDidMount() {
    this.props.getCurrencies();
  }
  handleSelect = ({ target }) => {
    this.props.setCurrency(target.value);
    this.props.setIndex(target.value);
  };
  render() {
    return (
      <>
        {/* <label htmlFor="currencies">{this.props.selectedCurrency.symbol}</label> */}
        <CurrencyWrapper
          name="currencies"
          id="currencies"
          style={{
            border: "none",
          }}
          onChange={this.handleSelect}
        >
          {this.props.currencies &&
            this.props.currencies.map((c, index) => (
              <CurrencyOption
                key={c.label}
                defaultValue={c.label === "USD" ? true : false}
                value={index}
              >
                {c.symbol} {c.label}
              </CurrencyOption>
            ))}
        </CurrencyWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currency.currencies,
  /* selectedCurrency: state.currency.selectedCurrency, */
});

const mapDispatchToProps = { getCurrencies, setCurrency, setIndex };

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);
