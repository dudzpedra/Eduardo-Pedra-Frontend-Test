import { gql } from "@apollo/client";

const GET_PRODUCT = gql`
  query product($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          id
          displayValue
          value
        }
        type
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`;

export default GET_PRODUCT;
