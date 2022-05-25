import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query {
    categories {
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
          type
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

export default GET_CATEGORIES;
