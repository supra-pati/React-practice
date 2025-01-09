import { useState } from "react";

const Api_demo = () => {
  const [advice, setAdvice] = useState("Hello");
  // const api = async () => {
  //     //fetch data from api
  //     // const res = await fetch("https://api.adviceslip.com/advice");
  //     const res = await fetch("http://localhost:8081/demo/hello");
  //     //convert response to json
  //     const data = await res.json();
  //     setAdvice(data.map((obj) => { return <li key={obj.name.toString()}>{obj.name}  {obj.age}</li> }));
  //     console.log(data.map((obj) => { return obj }));
  // }

  // const name = 'Supra'
  const breq = {
    name: "supra",
  };

  const apiPost = (e) => {
    // Using Fetch API
    e.preventDefault();
    fetch("http://localhost:8081/demo/hello", {
      method: "POST",
      body: JSON.stringify(breq),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.name);
        setAdvice(data.name + " " + data.age);
        // Handle data
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err.message);
        console.log(err.message);
      });
  };

  return (
    <>
      <h3>{advice}</h3>
      <button onClick={apiPost}>Get Advice</button>
    </>
  );
};

export default Api_demo;
