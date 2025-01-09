import { useState, useRef } from "react";
import Company from "./Company";

const AppSite = () => {
  const [counter, setCounter] = useState(5);
  let countRef = useRef(0);

  function handleIncrement() {
    countRef.current = countRef.current + 1;
  }
  return (
    <>
      <h1>AppSite</h1>
      <Company></Company>
      <div style={{ border: "4px solid black", position: "absolute" }}>
        <div
          style={{
            backgroundColor: "Tomato",
            position: "relative",
            left: "100px",
          }}
        >
          one
        </div>
        <div
          style={{
            backgroundColor: "MediumSeaGreen",
            position: "relative",
            left: "200px",
          }}
        >
          two
        </div>
        <div
          style={{
            backgroundColor: "yellowgreen",
            position: "absolute",
            left: "300px",
          }}
        >
          three
        </div>
        <div
          style={{
            backgroundColor: "DodgerBlue",
            position: "absolute",
            left: "400px",
          }}
        >
          four
        </div>
        <span>{counter}</span>
        <button
          onClick={() => {
            setCounter(counter + 5);
            setCounter(counter + 5);
            alert(counter);
            setCounter(counter + 5);
          }}
        >
          Increment
        </button>
        <span>Count: {countRef.current}</span>
        <button onClick={handleIncrement}>Click me</button>
      </div>
    </>
  );
};
export default AppSite;
