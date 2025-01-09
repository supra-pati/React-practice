// type conversion to convert string to number
/*
const inputYear = "1990";
console.log(inputYear + 20);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 20);
*/

// type coercion
/*
console.log("Hello " + 50 + " SP! ");
console.log("9" - "5"); // -> ?
console.log("19" - "13" + "17"); // -> ?
console.log("19" - "13" + 17); // -> ?
console.log("123" < 57); // -> ?
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ?
*/

// backticks benifits multi lines
/*
console.log(`dsdsfdsfsd
 sdfsdfds
    dfsdfsdd
dsfdfd`);

// backticks benifits we can put dynamic values in strings
console.log(`CG company starts from ${inputYear}`);
*/

//tricy output
/*console.log("23" - "10" - 5);
console.log("23" + "10" + 5);
console.log("10" / "5");
console.log("10" * "5");
console.log("30" - "5" - "4" - "8" + "3");
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 617
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false        bcz first type conversion to number then check
console.log("12" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143
*/

// five falsy values: 0,'',undefined,null,NaN
/*console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("sp"));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(undefined));
*/

/*
//alert and prompt
const str = prompt("hello");
console.log(str);
*/

/*
//Dot and function notation
const obj_John = {
  name: "John",
  age: 25,
};
obj_John.age += 5;
console.log(obj_John.age);

obj_John["age"] -= 10;
console.log(obj_John.age);
*/
