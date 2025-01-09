import { useReducer } from "react";

const initialState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { counter: state.counter + 1 };
    case "sub":
      return { counter: state.counter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Demo1() {
  const n = 11;
  const name = "sushama";
  const lname = "...";
  const img1 = "https://picsum.photos/id/18/367/267";
  const img2 = "https://picsum.photos/id/13/367/267";
  const headstyle = {
    color: "Chocolate",
    fontSize: "30px",
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 style={headstyle}>Fav scenery</h1>
      <ul>
        <img src={img1} width="100" height="100" alt="paratha" />
        <li>open space</li>
        <img src={img2} width="100" height="100" alt="curry" />
        <li>Beach</li>
      </ul>
      <h2>hello {`${name} ${lname}`}</h2>
      <p>
        {name} your lucky number is {n}
      </p>
      <h3>What is time!!</h3>
      <p>created by {`${name}`}.</p>
      <p>
        current date is{" "}
        {`${new Date().getDate()} / ${
          new Date().getMonth() + 1
        }  /  ${new Date().getFullYear()}`}
        .
      </p>
      <hr></hr>
      <p>count - {count.counter}</p>
      <button onClick={() => dispatch({ type: "add" })}>Increment</button>
      <button onClick={() => dispatch({ type: "sub" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Demo1;
