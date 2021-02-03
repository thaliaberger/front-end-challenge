import React, { useState } from "react";
import products from "../../products.json";

import "./Catalog.css";

function Homepage() {
  const [allProducts, setAllProducts] = useState(products.products);
  const [currentProduct, setCurrentProduct] = useState({ id: "", size: "" });
  const [cart, setCart] = useState([]);

  function handleSize(event) {
    setCurrentProduct({
      id: `${event.target.parentNode.parentNode.id}`,
      size: `${event.target.innerHTML}`,
    });
  }

  function handleCart(event) {
    if (!cart.length) {
      if (event.target.parentNode.id === currentProduct.id) {
        setCart([currentProduct]);
      } else {
        console.log("selecione um tamanho");
      }
    } else if (event.target.parentNode.id === currentProduct.id) {
      setCart([...cart, currentProduct]);
    } else {
      console.log("selecione um tamanho");
    }
  }

  console.log(cart);

  return (
    <div className="container">
      <h1 className="page-title">AMARO</h1>
      <div className="all-products">
        {allProducts.map((item) => (
          <div key="" id={item.style} className="each-product">
            <img className="product-image" src={item.image} />
            <p>{item.name}</p>
            {item.on_sale ? (
              <div key="">
                <h2 className="SALE-BADGE">ON SALE</h2>
                <h3>{item.discount_percentage} OFF</h3>
                <p>{item.regular_price}</p>
                <p>NOW {item.actual_price}</p>
              </div>
            ) : (
              <p>{item.regular_price}</p>
            )}

            <div className="sizes-div">
              {item.sizes.map((currentSize) => (
                <p onClick={handleSize}>{currentSize.size}</p>
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

export default Homepage;
