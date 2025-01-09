import React from "react";
import "./RouterApp.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import About from "./About";
import ProductDetails from "./ProductDetails";
import PageNotFound from "./PageNotFound";
import NavBarMenu from "./NavBarMenu";

const RouterApp = () => {
  return (
    <div>
      <NavBarMenu />
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
          <Route path="/Product" element={<Product />}>
            {/* nested Routeing */}
            <Route path=":id" element={<ProductDetails />}></Route>
          </Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default RouterApp;
