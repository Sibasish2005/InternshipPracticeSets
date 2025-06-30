// 7.Write a JavaScript function to calculate the sum of all elements in an array.
let arr = [1,2,3,4,5,6,7]
function findTotalSum(arr){
    let sum=0 ;
   let totalSum= arr.reduce((accumulator,currentSum)=> accumulator+currentSum,sum)
    return totalSum;
}
console.log(findTotalSum(arr));
