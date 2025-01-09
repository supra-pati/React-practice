/*let x;
console.log("x=> " + x);
console.log("typeof x => " + typeof x);

let x1 = null;
console.log("x1=> " + x1);
console.log("typeof x1=> " + typeof x1);

console.log("compare x and x1 with ==  is ");
console.log(x == x1);
console.log("compare x and x1 with === is  ");
console.log(x === x1);
*/

let arr = [2, 4, 6, 8, 1, 3, 5, 7];
const newArr = arr.map((e) => e * e);
console.log(newArr);
// arr.shift();  //it will remove element from beginning of array
arr.splice("");
console.log(arr);
