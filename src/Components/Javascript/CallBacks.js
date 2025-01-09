/*let data;

function fetchdata() {
  setTimeout(() => {
    data = { pCode: 1, pName: "mango" };
  }, 2000);
}

function displayData() {
  console.log(data);
  console.log("ends function..");
}

console.log("start function..");
fetchdata();
displayData();
*/

function fetchdata(callbackFunction) {
  setTimeout(() => {
    let data = { pCode: 1, pName: "mango" };
    console.log("hii1");
    callbackFunction(data);
  }, 2000);
  console.log("hii2");
}

console.log("start function..");
fetchdata(function (data) {
  console.log(data);
  console.log("ends function..");
});

function name(params) {}
