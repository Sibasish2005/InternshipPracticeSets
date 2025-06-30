// 2. Write a function to return the sum of all elements in an array.
let num = [1,2,3,4,5] 
function arrSum (num){
    let sum = 0;
    let totalSum = num.reduce((accumulator,currentValue)=>{
       return accumulator+currentValue ;
    })
    return totalSum;
 }

 console.log(arrSum(num));
 