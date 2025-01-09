// filepath: /src/components/Product.js
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
const Product = ({ id, name, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id, name, price }));
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
