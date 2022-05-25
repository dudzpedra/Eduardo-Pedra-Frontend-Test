import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query {
    categories {
      name
      products {
        id
        brand
        __typename @skip(if: true)
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
      }
    }
  }
`;

export default GET_CATEGORIES;
