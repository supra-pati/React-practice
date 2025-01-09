let fname = "max";
let age = 20;
let isValid = true;
let userId: number | string;
userId = 20;
userId = "abc123";
// userId = true; // error

let obj: {};
obj = { name: "max", age: 20 };
// obj = "abc"; // error
console.log(obj);

// OR

let student: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

student = {
  name: "jack",
  age: 20,
  isAdmin: true,
  id: 123,
};

console.log(student);

console.log(userId);
console.log(fname);
console.log(age);
console.log(isValid);
