import { gql } from "@apollo/client";

const GET_ALL_PRODUCTS = gql`
  {
    category(input: { title: "all" }) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          items {
            displayValue
            value
            id
          }
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
  }
`;

export default GET_ALL_PRODUCTS;
