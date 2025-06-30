// 6.  Write a JavaScript function to calculate the factorial of a given number.
let num;
let factorial = 1;
function findFactorial(num){
    for(let i=1;i<=num;i++){
        factorial*=i;
    }
    return factorial;
}
console.log(findFactorial(6));
console.log(findFactorial(2));
console.log(findFactorial(3));
console.log(findFactorial(10));
