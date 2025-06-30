// 10. How do you use map() to transform an array of objects into a new array with different properties?
const arr = [1,2,3,4,5,6];
let newArr = arr.map((val)=>{
    return val*2;
})
console.log(newArr);
