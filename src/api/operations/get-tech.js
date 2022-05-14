import { gql } from "@apollo/client";

const GET_TECH = gql`
  {
    category(input: { title: "tech" }) {
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

export default GET_TECH;
