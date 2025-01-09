// point 1
//function exp
/*function test() {
  console.log(arguments);
}

test(1, 3, 6);
*/

//arrow function
/*const testArr = () => {
  console.log(arguments);
};
testArr(8, 5, 2);

//alternate
const testArr = (...a) => {
  console.log(a);
};
testArr(8, 5, 2);
*/

// point 2
//this keyword won't work
// bcz we already have class keyword to deal with classes so we do not need function to act as class

/*const obj = {
  name: "sups",
  display: function (params) {
    console.log(this.name);
  },
};

obj.display();

const obj1 = {
  name: "sups",
  display: () => {
    console.log(this.name);
  },
};

obj1.display();
*/

// point 3
// new keyword would not work in arrow function as in ES6 we have class keyword
/*function newkey() {
  console.log("new keyword with traditional function ");
}
const a = new newkey();

const newkeyarr = () => {
  console.log("new keyword with arrow function ");
};
const b = new newkeyarr();
*/

// point 4
// if it is a single line then then {} is not required
//  and if single return statement then also return key word is not required
// short syntex  then notmal funtion
