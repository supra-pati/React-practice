import { useEffect } from "react";
import { useState } from "react";

function Greet() {
  const [nowTime, setNowTime] = useState("");
  let phase;
  const changecolor = { color: "" };
  const time = new Date();
  let hour = time.getHours();
  if (hour < 12 && hour > 4) {
    phase = "morning";
    changecolor.color = "teal";
  } else if (hour === 12) {
    phase = "noon";
    changecolor.color = "navy";
  } else if (hour < 14 && hour >= 12) {
    phase = "afternoon";
    changecolor.color = "darkmagenta";
  } else if (hour < 16 && hour >= 14) {
    phase = "afternoon";
    changecolor.color = "brown";
  } else {
    phase = "night";
    changecolor.color = "seagreen";
  }

  // const initialState = () => {
  //     console.log("Initial calling " + Date.now());
  //     return 0;
  // }

  // () => initialState()
  let [stateObj, setStateObj] = useState({
    count: 0,
    flag: false,
  });

  const [text, setText] = useState(false);
  const handleClickedText = () => {
    setText(true);
  };
  function increment(op) {
    let temp = stateObj.count;
    if (op === "+") {
      setStateObj({ ...stateObj, count: temp + 1 });
      console.log(temp + 1, stateObj.flag);
    } else {
      setStateObj({ ...stateObj, count: temp - 1 });
      console.log(temp - 1, stateObj.flag);
    }
  }

  useEffect(() => {
    document.title = `You clicked ${stateObj.count} times`;
  }, [stateObj.count]);

  const datashown = `count = ${JSON.stringify(
    stateObj.count
  )} and flag =  ${JSON.stringify(stateObj.flag)} `;

  useEffect(() => {
    setInterval(() => {
      let nwDate = new Date().toLocaleTimeString();
      setNowTime(nwDate);
    }, 1000);
  }, []);

  return (
    <div>
      <h1 className="heading" style={changecolor}>
        {`Hello.. Good ${phase}!! It's ${nowTime.toString()} now.`}
      </h1>
      <h2 data-testid="cnt">{stateObj.count}</h2>
      <button data-testid="btn" onClick={() => increment("+")}>
        add
      </button>
      &nbsp;
      <button onClick={() => increment("-")}>sub</button>
      {/* <input type="text" data-testid="input"></input> */}
      <br />
      <br />
      <p data-testid="text">
        {/* {!text && "hii welcome!!"}
        {text && "you have clicked the button"} */}
        {text ? "you have clicked the button" : "hii, u can click the button!!"}
      </p>
      <div>
        <button onClick={handleClickedText}>clickme!!</button>
      </div>
      <h3
        onChange={() => {
          console.log(stateObj.flag.toString());
        }}
      >
        {stateObj.flag.toString()}
      </h3>
      <button
        onClick={() => setStateObj({ ...stateObj, flag: !stateObj.flag })}
      >
        toggle
      </button>
      {/* <h4>{JSON.stringify(stateObj)}</h4> */}
      <h4>{datashown}</h4>
    </div>
  );
}

export default Greet;
