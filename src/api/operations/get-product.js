import { gql } from "@apollo/client";

const GET_PRODUCT = gql`
  query product($id: String!) {
    product(id: $id) {
      __typename @skip(if: true)
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        __typename @skip(if: true)
        id
        name
        type
        items {
          __typename @skip(if: true)
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
