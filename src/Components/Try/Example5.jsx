import React, { useState } from "react";

// Child component
function ChildComponent({ value, onChange }) {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

// Parent component
function Example5() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent value={text} onChange={handleTextChange} />
      <p>Value in parent component: {text}</p>
    </div>
  );
}

export default Example5;
