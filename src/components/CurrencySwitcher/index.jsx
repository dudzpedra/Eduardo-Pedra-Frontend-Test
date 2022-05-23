import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrencies, setCurrency } from "../../store/currencyActions";
import { setIndex } from "../../store/cartActions";
import { CurrencyWrapper } from "./styles/Wrapper";
import { CurrencyOption } from "./styles/Option";
import { CurrencyList } from "./styles/List";
import up from "../../assets/arrow-up.svg";
import down from "../../assets/arrow-down.svg";
import { CurrencyHeader } from "./styles/Header";
import { CurrencyOverlay } from "./styles/Overlay";

class CurrencySwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItems: false,
      selected: null,
    };
  }
  componentDidMount() {
    this.props.getCurrencies();
  }
  handleSelect = (currency, id) => {
    this.props.setCurrency(id);
    this.props.setIndex(id);

    this.setState({ selected: currency.symbol });
    this.setState({ showItems: false });
  };
  toggleMenu = () => this.setState({ showItems: !this.state.showItems });
  handleClose = () => this.setState({ showItems: false })
  render() {
    return (
      <>
      {this.state.showItems && <CurrencyOverlay onClick={this.handleClose}></CurrencyOverlay>}
      <CurrencyWrapper>
        <CurrencyHeader onClick={this.toggleMenu}>
          <p>
            {this.state.selected !== null ? this.state.selected : "$"}
          </p>
          <img
            src={this.state.showItems ? up : down}
            alt="Select Currency"
          />
        </CurrencyHeader>
        {this.state.showItems && (
          <CurrencyList>
            {this.props.currencies.map((currency, index) => (
              <CurrencyOption
                key={currency.label}
                onClick={() => this.handleSelect(currency, index)}
              >
                {currency.symbol} {currency.label}
              </CurrencyOption>
            ))}
          </CurrencyList>
        )}
      </CurrencyWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currency.currencies,
  selectedCurrency: state.currency.selectedCurrency,
});

const mapDispatchToProps = { getCurrencies, setCurrency, setIndex };

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);
