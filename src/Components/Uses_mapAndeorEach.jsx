export const Uses_mapAndeorEach = () => {
  var arr = [2, 4, 5, 7, 9];

  function mapdouble(x) {
    return x * 2;
  }

  function filasce(x) {
    return x < 5;
  }

  const newARR = [];
  function foreach_asce(x) {
    if (x > 5) {
      newARR.push(x);
    }
  }

  arr.forEach(foreach_asce);
  console.log("forEach     ->    " + newARR);
  console.log("mappp     ->    " + arr.map(mapdouble));
  console.log("filter     ->    " + arr.filter(filasce));

  return <div>{/* {arr.map(mapdouble)} */}</div>;
};
