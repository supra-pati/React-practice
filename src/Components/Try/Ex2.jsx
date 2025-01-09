import { useState } from "react";

const Ex2 = () => {
  return (
    <div>
      <ComponentA></ComponentA>
    </div>
  );
};

const ComponentA = () => {
  const [data, setData] = useState(null);
  const parantfunction = (passdata) => {
    setData(passdata);
    console.log("compA=> " + passdata);
  };
  const obj = [
    { firstname: "supra", lastname: "pati" },
    { firstname: "raj", lastname: "something" },
  ];

  return (
    <div>
      {data ? data : "no data yet"}
      <ComponentB obj={obj} parantfunction={parantfunction}></ComponentB>
    </div>
  );
};

const ComponentB = ({ parantfunction, obj }) => {
  const name = "sp";

  const Object = obj;

  const clickHandler = () => {
    parantfunction(name);
    console.log(name);
  };

  return (
    <div>
      <button onClick={clickHandler}>click</button>
    </div>
  );
};
export default Ex2;
