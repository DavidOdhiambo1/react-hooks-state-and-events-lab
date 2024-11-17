import React, { useState } from "react";

function Item({ name, category }) {
  
  const [addedToCart, setAddedToCart]=useState(false)

  function handleAddToCart(){
    setAddedToCart(!addedToCart)

  }

const liClass = addedToCart ? "in-cart" : ""
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{addedToCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
