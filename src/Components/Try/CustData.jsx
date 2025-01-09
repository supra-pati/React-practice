import React from "react";
// import { useParams } from "react-router-dom";

const CustData = ({ custobj }) => {
  console.log(custobj);
  //   const { data } = useParams();
  return (
    <div>
      <h1>{`data details =>${custobj.Name}`}</h1>
      <div>
        <p>{custobj.Name}</p>
        <p>{custobj.Age}</p>
        <p>{custobj.Password}</p>
        <p>{custobj.Email}</p>
      </div>
    </div>
  );
};

export default CustData;
