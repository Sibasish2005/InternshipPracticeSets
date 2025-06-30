
// 4.  Write a JavaScript function to reverse the elements of an array.

let arr = [1, 2, 3, 4, 5];
let rsvArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  rsvArr.push(arr[i]);
}
console.log(rsvArr);