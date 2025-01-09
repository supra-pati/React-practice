const arr = [1, 2, [3, 4, [5, 6]]];
const newarr = arr.reduce((acc, val) => acc.concat(val), []);
console.log(newarr);
const flattened = (arr) => [].concat(...arr);
console.log(arr.flat(Infinity));

// push and unshift is used to add elements in array
// splice(index,position,"addele")
// splice(2, 0, "addele");
// splice(3, 2);
// splice(2, 1, "addele"); // delete 1 ele and add addele instead of that
// splice(arr.length, 0, "addele");
// splice(0, 0, "addele");

const array1 = [1, 2, 3];
//The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
console.log(array1.unshift(4, 5, 6)); // Expected output: 5

console.log(array1);

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, "May");
months.splice(3, 0, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


