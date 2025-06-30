// 1. Write a function to find the maximum sum of a subarray within an array.
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubarraySum(arr) {
  let maxSum = arr[0];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      currentSum = currentSum + arr[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}
console.log(maxSubarraySum(arr));
