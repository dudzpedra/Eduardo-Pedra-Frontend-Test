import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/client";
import AppRoutes from "./pages";
import { Provider } from "react-redux";
import store from "./store";
import ErrorBoundary from "./components/ErrorBoundary";
import { saveState } from "./store/storage";

store.subscribe(() => saveState(store.getState()))

const root = createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </Provider>
  </ApolloProvider>
);
