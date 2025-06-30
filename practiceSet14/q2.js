// 2. Write a JavaScript program to sort an array of numbers in ascending order.
let arr = [5,3,2,1];
function arrangeInAscendingOrder(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(arrangeInAscendingOrder(arr));
