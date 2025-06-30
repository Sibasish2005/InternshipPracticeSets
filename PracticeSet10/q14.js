// 14.Filter out numbers less than 3 from the array [1, 2, 3, 4, 5] and then double the remaining numbers.
let arr =[1, 2, 3, 4, 5];
let newArr = arr.filter((val) =>{
    return val<3;
} )
console.log(newArr);
