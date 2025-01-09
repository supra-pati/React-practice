import React from "react";
import Product from "./Product";

type Props = {};
const TypeApp = (props: Props) => {
  return (
    <div>
      <Product pCode={1} pName="apple" qty={10}></Product>
    </div>
  );
};
export default TypeApp;
