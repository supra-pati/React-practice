const increment = (function counter() {
  let count = 0;
  return () => {
    count++;
    console.log(count);
  };
})();

(function () {
  // IIFE code block
  var localVar = "This is a local variable";
  console.log(localVar); // Output: This is a local variable
})();

increment();
// increment();
