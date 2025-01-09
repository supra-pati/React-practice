// function outer() {
//   let c = 0;
//   return function () {
//     c++;
//     console.log(c);
//   };
// }
// const b = outer();
// b();
// b();
// outer()();

// let mat1 = [
//   [2, 4],
//   [3, 4],
// ];
// let mat2 = [
//   [1, 2],
//   [1, 3],
// ];

// function Person() {
//   this.age = 0;

//   setInterval(function growUp() {
//     // `this` refers to the global object or is undefined in strict mode
//     console.log("thiss = > " + this);
//     this.age++;
//   }, 1000);
// }

// const person = new Person();
// console.log(person.age);

// function Person() {
//   this.age = 0;

//   setInterval(() => {
//     // `this` now refers to the instance of Person, because it's lexically bound
//     this.age++;
//     console.log("this    " + this.age);
//   }, 1000);
// }

// const person = new Person();
// // After some time...
// console.log(person.age);

// <div>
//   <div style="background-color:Tomato;">one</div>
//   <div style="background-color:MediumSeaGreen;">two</div>
//   <div style="background-color:DodgerBlue;">three</div>
//   <div style="background-color:Violet;">four</div>
// </div>;

const person = {
    name: "supra pati",
    hello: function (data) {
        console.log(this.name + " says hello ", data);
    },
};

let anotherFunction = {name: "sushama"};

// person.hello("how are you..");
// person.hello.call(anotherFunction, "how are you..");
person.hello.bind(anotherFunction, ["how are you.."]);
