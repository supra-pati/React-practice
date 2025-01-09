import React from "react";

interface Props {
  pCode: number;
  pName: string;
  qty: number;
}
const Product = (props: Props) => {
  return (
    <div>
      {props.pCode} - {props.pName}
    </div>
  );
};
export default Product;
