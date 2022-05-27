import React, { Component } from "react";

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
          <h1>Ops, something wrong is not right...</h1>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default ErrorBoundary;
