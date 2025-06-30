// 1. How would you reverse a string without using built-in methods like reverse()?

// let str = "SIBASISH";
// const reverseStr = () => {
//   let parts = str.split("");
//   let reversed = "";

//   for (let i = parts.length - 1; i >= 0; i--) {
//     reversed += parts[i];
//   }
//   console.log(reversed);
// };
// console.log(str);

// reverseStr(str);










// 2. How can you find the first non-repeated character in a string?


// let str="SIBASISH";
// function firstNonRepeating(){
//      let count ={};
//      for( let i = 0;i<str.length;i++){
//         let char = str[i];
//         if(count[char]){
//             count[char]++;
//         }
//         else{
//             count[char] = 1;
//         }
//      }

//      for( let i = 0; i< str.length;i++){
//         if(count[str[i]] === 1){
//             return str[i];
//         }
//      }
//       return null;
// }
// console.log(firstNonRepeating(str));






// 5. How would you find the length of the longest substring in a string that does not contain any repeating characters?
 










//  6. How would you flatten a deeply nested array into a single-level array in JavaScript?

let array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, 11], 12, [13, 14, 15]];
let newArray = [];

const flatArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray(array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
};

flatArray(array);
console.log(newArray);k



































 