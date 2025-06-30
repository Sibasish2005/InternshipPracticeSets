// 4. Write a function to find the longest increasing subsequence in an array.
//[0,1,0,3,2,3]

let arr = [0, 1, 0, 3, 2, 3];
function findLIS(arr) {
  let temp = [];
  temp.push(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > temp[temp.length - 1]) {
      temp.push(arr[i]);
    } else {
      let ind = lowerBound(temp, arr[i]);
      temp[ind] = arr[i];
    }
  }
  return temp;
  
  function lowerBound(arr, key) {
    let left = 0,
      right = arr.length - 1;

    while (left < right) {
      let mid = (left + right) / 2;
      mid = mid - (mid % 1);

      if (arr[mid] < key) left = mid + 1;
      else right = mid;
    }

    return left;
  }
}
console.log(findLIS(arr));
