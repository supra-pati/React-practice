// function abc() {
//   let a = 10;
//   const b = 20;
//   console.log(a, b, c);
//   var c = 30;
//   d = 40;
//   console.log(c, d);
// }
// abc();

// var variable = 10;
// (() => {
//   console.log(variable);
//   variable = 20;
//   console.log(variable);
// })();
// console.log(variable);
// var variable = 30;
// console.log(variable);

// var variable = 10;
// (() => {
//   foo = 100;
//   console.log(variable);
//   var foo = 700;
//   variable = 20;
//   console.log(variable);
// })();
// console.log(foo);
// console.log(variable);
// var variable = 30;

// output 10  20  error  20 inshort error

const person = {
  name: "sp",
  age: 10,
  mankada: "khatai",
};
const person1 = {
  name: "sm",
  age: 100,
};

const { age, name } = person;
// console.log(name);
// console.log(makada);
//  const {name,age} = person1;

const colors = ["red", "blue"];

const [first, second = "green"] = colors;
console.log(second);
