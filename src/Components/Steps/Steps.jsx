import React from "react";
import "./Steps.css";
import messages from "./Msg";
import { useState } from "react";

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function btnprev() {
    if (step > 1) {
      setStep((currentStep) => currentStep - 1);
    }
  }
  function btnnext() {
    if (step < 3) {
      setStep((currentStep) => currentStep + 1);
    }
  }
  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setIsOpen((isOpenValue) => !isOpenValue);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            Step {step}: {messages[step - 1]}
          </div>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={btnprev}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={btnnext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Steps;
