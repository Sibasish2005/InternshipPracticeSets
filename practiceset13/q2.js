// 2. Write a JavaScript function to find the maximum sum of a subarray within an array.
function maxSubArraySum(arr) {
  let currMax = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currMax += arr[i];
    if (currMax > maxSum) {
      maxSum = currMax;
    } else {
      return maxSum;
    }
  }
}
console.log(maxSubArraySum([1,2,3,4,5,-1]));
