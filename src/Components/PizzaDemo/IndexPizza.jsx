import "./IndexPizza.css";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import React from "react";

function IndexPizza() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

export default IndexPizza;
