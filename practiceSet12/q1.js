// Given an array of numbers [1, 2, 3, 4, 5, 6], use the filter() method to create a new array with only the even numbers.
let nums = [1, 2, 3, 4, 5, 6];
let arr = nums.filter((val)=>{
    return val%2==0;
})
console.log(arr);
