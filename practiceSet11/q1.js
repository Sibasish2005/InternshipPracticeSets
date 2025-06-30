// 1. What is the purpose of the filter() method in JavaScript, and how does it work?
let arr = [1,2,3,4,5,6];
let evenAr = arr.filter(function even(num){
    return num%2 ==0 ;
})
console.log(evenAr);
