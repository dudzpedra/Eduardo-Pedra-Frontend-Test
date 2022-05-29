import React, { Component } from "react";
import ProductAttributes from "../ProductAttributes";
import ProductPrice from "../ProductPrice";
import AddToCartButton from "../ui/AddToCartButton";
import { DetailsWrapper } from "./styles/Wrapper";
import { addToCart } from "../../store/actions/cartActions";
import { getProduct } from "../../store/actions/productActions";
import { connect } from "react-redux";
import ProductHeader from "../ProductHeader";
import ProductDescription from "../ProductDescription";
import Notification from "../Notification";
import notifications from "../../utils/notifications";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotification: false,
      notification: "",
      notificationColor: ''
    };
  }
  handleAdd = () => {
    const selectedAttributes = this.props.selectedAttributes;
    const productAttributesLength = this.props.product.attributes.length;

    if (selectedAttributes.length === productAttributesLength) {
      const productId = this.props.product.id;
      const attributeItemsIds = selectedAttributes.map(
        (att) => att.items[0].id
      );

      const newItemId = `${productId}-${attributeItemsIds
        .map((id) => id)
        .join("-")}`;

      const itemToAdd = {
        ...this.props.product,
        id: newItemId,
        selectedAttributes: selectedAttributes,
        quantity: 1,
      };
      this.props.addToCart(itemToAdd);

      let path = window.location.pathname;
      let id = path.replace("/", "");
      this.props.getProduct(id);

      this.setState({ showNotification: true, notification: notifications[0], notificationColor: 'green' });
      setTimeout(() => {
        this.setState({ showNotification: false });
      }, 3000);
    } else {
      this.setState({ showNotification: true, notification: notifications[1], notificationColor: 'red' });
      setTimeout(() => {
        this.setState({ showNotification: false });
      }, 3000);
    }
  };

  render() {
    return (
      <DetailsWrapper>
        <ProductHeader {...this.props.product} />
        <ProductAttributes {...this.props.product} />
        <strong>PRICE:</strong>
        <ProductPrice prices={this.props.product.prices[this.props.index]} />
        {this.state.showNotification && (
          <Notification notification={this.state.notification} color={this.state.notificationColor} />
        )}
        <AddToCartButton
          onClick={this.handleAdd}
          disabled={!this.props.product.inStock && true}
        />
        <ProductDescription />
      </DetailsWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  index: state.currency.selectedIndex,
  selectedAttributes: state.products.selectedAttributes,
});
const mapDispatchToProps = { addToCart, getProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
