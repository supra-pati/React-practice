import React from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const obj = useOutletContext();
  //   const location = useLocation();
  return (
    <div>
      <h1>p details {id}</h1>
      {/* <h3>{JSON.stringify(location.state)}</h3> */}
      <h3>
        {obj[id - 1].name} in rupees {obj[id - 1].price}
      </h3>
    </div>
  );
};

export default ProductDetails;
