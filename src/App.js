import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import store from "../src/redux/store";
import { Provider } from "react-redux";

import Catalogue from "./components/catalog/Catalog.js";
import Cart from "./components/cart/Cart.js";

console.log(store.getState());

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Provider store={store}>
            <Route exact path="/" component={Catalogue} />
            <Route exact path="/cart" component={Cart} />
          </Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
