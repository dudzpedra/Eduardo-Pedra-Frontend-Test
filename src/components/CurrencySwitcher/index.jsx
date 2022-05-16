import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrencies, setCurrency } from "../../store/currencyActions";

class CurrencySwitcher extends Component {
  componentDidMount() {
    this.props.getCurrencies();
  }
  handleSelect = ({ target }) => {
    this.props.setCurrency(target.value);
  };
  render() {
    return (
      <>
        <label htmlFor="currencies">{this.props.selectedCurrency.symbol}</label>
        <select
          name="currencies"
          id="currencies"
          style={{
            border: "none",
          }}
          onChange={this.handleSelect}
        >
          {this.props.currencies &&
            this.props.currencies.map((c, index) => (
              <option
                key={c.label}
                defaultValue={c.label === "USD" ? true : false}
                value={index}
              >
                {c.symbol} {c.label}
              </option>
            ))}
        </select>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currency.currencies,
  selectedCurrency: state.currency.selectedCurrency,
});

const mapDispatchToProps = { getCurrencies, setCurrency };

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);
