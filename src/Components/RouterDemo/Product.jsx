import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./RouterApp.css";
import pizzaData from "../PizzaDemo/pizzaName";

const Product = () => {
  const [products, setProduct] = useState(pizzaData);
  return (
    <div>
      {products.map((prod) => {
        return (
          <li className="li-style" key={prod.id}>
            <Link
              state={prod}
              className="link-style"
              to={`/product/${prod.id}`}
            >
              {prod.name}
            </Link>
          </li>
        );
      })}

      <Outlet context={products}></Outlet>
    </div>
  );
};

export default Product;
