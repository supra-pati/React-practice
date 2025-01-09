import { useState } from "react";
import Cart from "./Cart";
import products from "./product";
import ProductList from "./ProductList";
import "./ShopApp.css";
// import typeProducts from "./type";

// type Props = {
//   products: typeProducts;
// };

const ShopApp = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
  };

  return (
    <div className="App">
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default ShopApp;
