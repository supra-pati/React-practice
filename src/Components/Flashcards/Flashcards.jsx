import React from "react";
import questions from "./Questions";

const Flashcards = () => {
  return (
    <div>
      {questions.map((q) => (
        <div>{q.question}</div>
      ))}
    </div>
  );
};

export default Flashcards;
