import React from "react";
import { useState } from "react";
import "./CountDays.css";

const CountDays = () => {
  const [stepVal, setstepVal] = useState(1);
  const [countValue, setCountValue] = useState(0);

  const addValuehandler = () => {
    setstepVal((c) => c + 1);
    console.log(stepVal + "🎈");
  };
  const subValuehandler = () => {
    setstepVal((c) => c - 1);
    console.log(stepVal);
  };

  const addCountValuehandler = () => {
    setCountValue((c) => c + stepVal);
    console.log("date=>  " + datetoday.toDateString());
  };
  const subCountValuehandler = () => {
    setCountValue((c) => c - stepVal);
  };

  const datetoday = new Date();
  datetoday.setDate(datetoday.getDate() + countValue);
  return (
    <div className="styleText">
      <div>
        <button onClick={subValuehandler}>-</button>
        <span>Step: {stepVal}</span>
        <button onClick={addValuehandler}>+</button>
      </div>
      <div>
        <button onClick={subCountValuehandler}>-</button>
        <span>Count: {countValue}</span>
        <button onClick={addCountValuehandler}>+</button>
      </div>
      <p>
        <span>
          {countValue === 0
            ? "today is "
            : countValue > 0
            ? `${countValue} days from today is `
            : countValue < 0
            ? `${Math.abs(countValue)} days ago from today was `
            : ""}
        </span>
        <span> {datetoday.toDateString()}.</span>
      </p>
    </div>
  );
};

export default CountDays;
