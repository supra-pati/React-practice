import React from "react";
import { useState } from "react";

const arr = ["Breakfast", "Lunch", "Dinner"];

const Example1 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [newarr, setNewArr] = useState(arr);
  const [currentIndex, setCurrentIndex] = useState();

  var a = [];
  const handlerChange = (i) => {
    // const value = e.target.value;
    console.log("outside" + a[i]);
    if (a[i] === null) {
      console.log("inside if=   " + a[i]);
      a[i] = true;
    } else {
      a[i] = !a[i];
      console.log("inside else =  " + a[i]);
    }
    setIsChecked(!isChecked);
    setCurrentIndex(i);
    console.log("check value =   " + a[i], i);
  };

  const handlerClick = (i) => {
    let closeItem = newarr;
    let arrFilterd = closeItem.filter((item, itemIndex) => {
      return i !== itemIndex;
    });
    console.log(arrFilterd);
    setNewArr(arrFilterd);
  };

  return (
    <div>
      <ul>
        {newarr.map((element, index) => {
          return (
            <li key={element.toString()}>
              <input
                type="checkBox"
                onChange={() => handlerChange(index)}
              ></input>
              {element}
              {a[index] === true && currentIndex === index && (
                <div>
                  <button onClick={() => handlerClick(index)}>❌</button>
                  <pre></pre>
                </div>
              )}
              {console.log("arrrrrrr=>   " + a[index])}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Example1;
