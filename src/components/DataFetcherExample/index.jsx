import { gql } from "@apollo/client";
import React, { Component } from "react";

class DataFetcherExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  getCategories = async () => {
    try {
      const { data } = await this.props.client.query({
        query: gql`
          {
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
        `,
      });
      if (data) {
        console.log(data);
        this.setState({ data: data })
      }
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.getCategories}>Fetch Categories</button>
        {this.state.data &&
          this.state.data.categories.map((c) => <p key={c.name}>{c.name}</p>)}
      </div>
    );
  }
}

export default DataFetcherExample;
