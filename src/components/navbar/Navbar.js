import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Navbar.css";
import cartIcon from "../../images/shopping-cart.png";

function Navbar() {
  const cart = useSelector((state) =>
    state.cart.filter((i) => {
      return i.qty > 0;
    })
  );
  return (
    <div className="navbar">
      <div></div>
      <div>
        <Link to="/">
          <h1 className="page-title">AMARO</h1>
        </Link>
      </div>
      <div className="cart-nav">
        <Link to="/cart">
          <p>{cart.length}</p>
          <img className="cart-icon" src={cartIcon} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
