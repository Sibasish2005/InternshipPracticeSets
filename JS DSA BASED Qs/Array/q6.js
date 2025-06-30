// 6. Write a function to find the number of ways to partition an array into three equal sum subsets.
let arr = [1, 2, 3, 0, 3];
function countPartitions() {
  let totalSum = arr.reduce((sum, num) => sum + num, 0);
  const partitionSum = totalSum / 3;
  let sum = 0;
  let count = 0;
  let ways = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum === partitionSum * 2) {
      ways = ways + count;
    }
    if (sum === partitionSum) {
      count++;    }
  }
  return ways;
}
console.log(
  " the number of ways to partition an array into three equal sum subsets"
);

console.log(countPartitions(arr));
