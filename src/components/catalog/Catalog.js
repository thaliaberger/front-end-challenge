import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../navbar/Navbar.js";
import "./Catalog.css";

function Catalog() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [allProducts, setAllProducts] = useState(products);
  const [currentProduct, setCurrentProduct] = useState({ id: "", size: "" });
  const [cart, setCart] = useState([]);

  function handleSize(event) {
    setCurrentProduct({
      id: `${event.target.parentNode.parentNode.id}`,
      size: `${event.target.innerHTML}`,
    });
    event.target.className === "unselected-size"
      ? (event.target.className = "selected-size")
      : (event.target.className = "unselected-size");
  }

  function handleCart(event) {
    if (event.target.parentNode.id === currentProduct.id) {
      dispatch({
        type: "ADD",
        id: `${currentProduct.id}`,
        size: `${currentProduct.size}`,
      });
    } else {
      console.log("selecione um tamanho");
    }
  }
  console.log(cart);

  return (
    <div className="container">
      <Navbar />
      <div className="all-products">
        {allProducts.map((item) => (
          <div key="" id={item.style} className="each-product">
            <img className="product-image" src={item.image} />
            <p className="product-name">{item.name}</p>
            {item.on_sale ? (
              <div className="price-div" key="">
                <h3 className="sale-badge">
                  ON SALE {item.discount_percentage} OFF
                </h3>
                <p>
                  <small>{item.regular_price}</small>
                </p>
                <p>
                  NOW <strong>{item.actual_price}</strong>
                </p>
              </div>
            ) : (
              <p className="price-div">
                <strong>{item.regular_price}</strong>
              </p>
            )}

            <div className="sizes-div">
              {item.sizes.map((currentSize) => (
                <p className="unselected-size" onClick={handleSize}>
                  {currentSize.size}
                </p>
              ))}
            </div>
            <button onClick={handleCart} className="add-btn">
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
