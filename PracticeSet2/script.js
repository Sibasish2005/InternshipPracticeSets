// 1. What is the difference between synchronous and asynchronous programming in JavaScript?
// the major difference betwwen synchromous and asynchronous programming is that in synchronous programming the code execute in a sequence while in asynchronous programming some of the code might execute later that means  not in a sequencial way.

//  2. How do you declare a variable in JavaScript?
// let variable_One = 10;
// var variable_two = 10;
// const variable_three = 10;

// 4. Write a JavaScript function to find the maximum sum of a subarray within an Array
// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// function maxSubArraySum(arr) {
//   let currentSum = 0;
//   let maxSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     currentSum = currentSum + arr[i];
//     if (currentSum < 0) {
//       currentSum = 0;
//     }
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }
//   }
//   return maxSum;
// }
// console.log(maxSubArraySum(arr));

// 3. What is the purpose of the this keyword in JavaScript?
// let user = {
//   name: "Sibasish",
//   age: 20,
//   getDetails() {
//     console.log(this.name);
//     console.log(this);

//   },
//   ChildObj:{
//     name: "abc",
//     age: 18,
//     getInfo(){
//       console.log(this);

//     }
//   }
// };

// user.getDetails();\

// 6. Write a JavaScript program to check if a given string is a valid JSON string.

// function checkJsonString(str){
//   try{
//     JSON.parse(str);
//   }
//   catch(e){
//     return false;
//   }
//   return true;
// }

// 10. What is the difference between == and === in JavaScript?

// let num = "5";
// // loosely equality
// if(num ==5 ){
//   console.log(true);

// }
// else{
//  console.log(false);

// }
// // strictly equal
// if(num === 5){
//   console.log(true);

// }
// else{
// console.log(false);
// }

// console.log(5 == "5");
// console.log(5 === "5");

// 12. What is the purpose of the async/await syntax in JavaScript?

// function repeatAfter2s() {
//   setInterval(() => {
//     console.log("repeating phase");
//   }, 2000);
// }
// async function repeat(arr) {
//   await repeatAfter2s();
// }
// repeat();

// console.log("one");
// console.log("two");
// setInterval(() => {
//   console.log("four");
// }, 1);
// console.log("three");


 let str="SIBASISH";
 let parts=
 console.log(parts);
 
 
  // let reverseStr= "";
  // for(let i =str.length-1;i>=0;i--){
  //   // str[i].push(reverseStr[i]);
  //   console.log(str[i]);

  // }
  