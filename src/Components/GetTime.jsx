import { useState } from "react";

const GetTime = () => {
  let [time, SetTime] = useState("Time");
  let [tdate, SetDate] = useState("dd/mm/yy");

  const getTime = () => {
    const lc = new Date().toLocaleTimeString();
    let today = new Date().toLocaleDateString("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });
    SetDate(today);
    SetTime((time = lc));
  };

  //it will show the time dynamially
  // const noww  = new Date().toLocaleTimeString();
  // let [time, SetTime] = useState(noww);
  // setInterval(getTime,1000);

  //inline css
  const btn = {
    color: "white",
    backgroundColor: "DodgerBlue",
    display: "inline-block",
    width: "55px",
    // display: "block",
    borderRadius: "14px",
    // padding: "10px",
  };

  return (
    <div>
      <h1>{`Today date- ${tdate} and time -${time}`}</h1>
      <button style={btn} onClick={getTime}>
        Get Current Time
      </button>
    </div>
  );
};

export default GetTime;
