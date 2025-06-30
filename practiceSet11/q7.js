// 7. What is the purpose of the map() method in JavaScript, and how does it differ from forEach()?
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map((val) => {
  return val * 2;
});
console.log(arr2);
console.log("-----------------------");
let arr3 = [1, 2, 3, 4, 6];
arr3.forEach((val, index) => {
  console.log("the index is" + index + "and value is" + val);
});
