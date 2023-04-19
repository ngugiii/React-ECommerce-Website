import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";

ReactDOM.render(
  <Provider store={store}>
    <ProductsProvider>
      <CartProvider>
    <App />
      </CartProvider>
    </ProductsProvider>
  </Provider>,
  document.getElementById("root")
);
