// 2. How does a callback function handle multiple arguments with different data types?
function addArray(num, arr, nextArray) {
  arr.push(num);
  if (nextArray) {
   return nextArray();
  }
  return arr;
}
console.log(
  addArray(
    5,
    [1, 2, 3, 4],
    (nextArray = () => {
      return addArray(2, [1, 2, 3],nextArray = ()=>{
       return addArray(2,[1,2,3,4])
      });
    })
  )
);
