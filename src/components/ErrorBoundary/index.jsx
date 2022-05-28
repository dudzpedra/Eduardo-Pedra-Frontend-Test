import React, { Component } from "react";
import { Errorwrapper } from "./styles/Wrapper";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    return (
      <>
        {this.state.hasError ? (
          <Errorwrapper>
            <h1>Ops, something wrong is not right...</h1>
            <p>Consider trying the following steps:</p>
            <ol>
              <p>
                <li>Refresh the page</li>
              </p>
              <p>
                <li>Hit the back button to go to the previous page</li>
              </p>
            </ol>
          </Errorwrapper>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default ErrorBoundary;
