import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Catalogue from "./components/catalog/Catalog.js";
import Cart from "./components/cart/Cart.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Catalogue} />
          <Route exact path="/car" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
