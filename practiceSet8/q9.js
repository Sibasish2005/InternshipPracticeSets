// 9.  Write a JavaScript function to calculate the sum of even numbers in an array.
arr = [1, 2, 3, 4, 5, 6];
function calSumEven() {
  let evenSum = 0;
  for(let i = 0;i<arr.length;i++){
    if(arr[i]%2===0){
        evenSum+=arr[i];
    }
  }
  return evenSum;
}
console.log(calSumEven(arr));
