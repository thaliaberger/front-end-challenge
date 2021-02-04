import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./Cart.css";
import Navbar from "../navbar/Navbar.js";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) =>
    state.cart.filter((i) => {
      return i.qty > 0;
    })
  );

  function handleAdd(event) {
    console.log(event.target.id);
    dispatch({
      type: "ADD",
      id: `${event.target.id}`,
    });
  }

  function handleRemove(event) {
    console.log(event.target.id);
    dispatch({
      type: "REMOVE",
      id: `${event.target.id}`,
    });
  }
  console.log(cart);

  return (
    <div>
      <Navbar />
      {cart.length ? (
        cart.map((item) => (
          <div className="cart-div">
            <img className="cart-image" src={item.image} />
            <div>
              <h5>{item.name}</h5>
              <p>{item.actual_price}</p>
              <div className="cart-quantities">
                <button
                  id={item.style}
                  onClick={handleRemove}
                  className="add-btn"
                >
                  -
                </button>
                <p>{item.qty}</p>
                <button id={item.style} onClick={handleAdd} className="add-btn">
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>Empty Cart</p>
          <Link to="/">Back to the catalog</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
