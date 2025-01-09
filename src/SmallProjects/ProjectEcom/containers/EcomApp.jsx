import Header from "./Header";
import ProductListing from "./ProductListing";
import "./EcomApp.css";
import React from "react";

const EcomApp = () => {
  return (
    <React.Fragment className="maincontainer">
      <hr></hr>
      <Header />

      {/* <ProductListing></ProductListing> */}
    </React.Fragment>
  );
};
export default EcomApp;
