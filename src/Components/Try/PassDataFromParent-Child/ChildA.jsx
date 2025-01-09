import React from "react";
import ChildB from "./ChildB";

const ChildA = ({ childDataToParent }) => {
  return (
    <div>
      <ChildB childDataToParent={childDataToParent}></ChildB>
    </div>
  );
};

export default ChildA;
