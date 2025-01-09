import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["A", "B", "C", "D", "E"]);
  //   const [todos, setTodos] = useState(["Learn React", "Read Books", "Exercise"]);
  const shuffle = () => {
    setTodos([...todos].reverse()); // Reverse the order
  };

  return (
    <>
      <button onClick={shuffle}>Shuffle Todos</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li> // Using index as key
        ))}
      </ul>
    </>
  );
}
export default TodoList;
