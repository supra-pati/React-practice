import React from "react";
// import { useState } from "react";

const ChildB = ({ childDataToParent }) => {
  const fname = "supra pati";
  const onClickHandler = (fname) => {
    childDataToParent(fname);
    console.log("succesfully pass data from childB =>  ", fname);
  };
  return (
    <div>
      <br></br>
      <button onClick={() => onClickHandler(fname)}>Click</button>
    </div>
  );
};

export default ChildB;
