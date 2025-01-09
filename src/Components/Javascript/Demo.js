const fun = function greetFunc(uname, message = "pati ") {
  //this how we provide default value   message = "pati"
  console.log(uname, message);
  //   console.log(message);
  return "hii..   " + uname + "  ,  " + message;
};

fun("supra");
// fun("supra", "welcome to CG ");
// greetFunc("sp", "hello!  what's up! ");

const addCounter = () => {
  let c = 0;
  return () => {
    c++;
    return c;
  };
};

const cl = addCounter();
console.log(cl());
console.log(cl());
console.log(cl());
