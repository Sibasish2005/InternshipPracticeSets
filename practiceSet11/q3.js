// 3. Can you explain the difference between map() and flatMap(), and when would you use each?
let arrOne = [1,2,3,4,5];


const mapped = arrOne.map((value)=>{
 return value*2;
})
console.log(mapped);

let secondArr = ["siba","sish","chakraborti"]
const flatMapped = secondArr.flatMap((val)=>{
   if(val.length<5){
    return val;
   }
   return [];
})
console.log(flatMapped);
