import React from "react";

const FunctionJs = () => {
  function greetFunc(uname, message = "pati ") {
    //this how we provide default value   message = "pati"
    console.log(uname, " -> ", message);
    // console.log(message);
    // return "hii..   " + uname + "  ,  " + message;
  }
  return (
    <div>
      {greetFunc("supra")}
      {greetFunc("supra", "welcome to CG ")}
      {greetFunc("sp", "hello!  what's up! ")}
    </div>
  );
};

export default FunctionJs;
