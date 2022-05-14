import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/client";
import AppRoutes from "./pages";

const root = createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <AppRoutes />
  </ApolloProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
