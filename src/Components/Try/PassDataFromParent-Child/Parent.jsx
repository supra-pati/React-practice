import { useState } from "react";
import ChildA from "./ChildA";

const Parent = () => {
  const [name, setName] = useState(null);
  const childDataToParent = (dataB) => {
    console.log("succesfully pass data from child to parent class =>  ", dataB);
    setName(dataB);
  };

  return (
    <div>
      {name ? name : " no data "}
      <ChildA childDataToParent={childDataToParent}></ChildA>
    </div>
  );
};

export default Parent;
