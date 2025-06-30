// 1. Use a for...of loop to iterate over an array of numbers and log each number to the console

// let arr=[1,2,3,4,5,6,7];

// {
//     console.log(parts);

// }

// 2. Use a for...of loop to iterate over a string and log each character to the console.
//  let str = "Sibasish";
//  for(parts of str){
//     console.log(parts);

//  }

//  3. Use a for...of loop to iterate over an array of strings and log each string to the console.
// let str = "Sibasish";
// let arr = [];
// for (parts of str) {
//   arr += parts;
// }
// for (element of arr) {
//   console.log(element);
// }
// console.log("\n");

// let arr2 = ["1", "2", "3", "4", "5"];
// for (a of arr2) {
//   console.log(a);
// }

// 4. Use a for...in loop to iterate over an object's properties and log each property name and value to the console.

// const obj = {
//     name:"SIBASISH",
//     age:20,
//     isStudent:true,
// }
// for( key in obj){
//     console.log(key+":"+obj[key]);

// }

// 5. Use a for...in loop to iterate over an object's properties and log each property name to the console.

// const obj = {
//     name:"SIBASISH",
//     age:20,
//     isStudent:true,
// }
// for( key in obj){
//     console.log(key);

// }

//6. Use a for...in loop to check if an object has a certain property.

const object2 = {
    name:"SIBASISH",
    age:20,
    isStudent:true,
}

for( let key in object2){
 if(key == "age")
    console.log(key);

}

// 7. Use setTimeout to log a message to the console after a 2-second delay.

// setTimeout(()=>{
//     console.log("SIBASISH");

// },2000);

// 8. Use setTimeout to call a function that logs a message to the console after a delay.

// function sayHello(){
//     setTimeout(() => {
//         console.log("hello");

//     },1000);
// }
// sayHello();

// 9. Use setTimeout to log a message to the console after a 5-second delay.

// setTimeout(()=>{
//     console.log("SIBASISH");

// },5000);

// 10. Use setInterval to log a message to the console every 2 seconds.

// setInterval(()=>{
//     console.log("repeating after 2s");

// },2000)

// 11. Use setInterval to log the current time to the console every second.

// const showCurrentTime = ()=>{
//     let date = new Date();
//   const currTime =date.toLocaleTimeString();
//     console.log(currTime);

// }
// setInterval(()=>{
//     showCurrentTime();
// },1000);

// 12. Use setInterval to call a function that logs a message to the console every 5 seconds.
//  function sayHello(){
//     console.log("hello");

//  }
//  setInterval(()=>{
//     sayHello();
//  },5000)

// 13. Use async/await to fetch data from a simple API and log the response to the console.











// 14. Use async/await to call a function that returns a promise and log the result to the console.

//  function getPromise() {
//   return new Promise((resolve, reject) => {
//     resolve("success");
//     console.log("promise returned");
    
//   });
// }
//  async function getResult(res) {
//    try{
//     const result = await getPromise();
//     console.log(result);
//    }
//     catch{
//         console.log("error has occured ");
        
//     }
//  }
// getResult();




// 15. Use async/await to handle a simple promise and log the result to the console.

// function getPromise() {
//     return new Promise((resolve, reject) => {
//       resolve("success");
//       console.log("promise returned");
      
//     });
//   }
//    async function getResult(res) {
//      try{
//       const result = await getPromise();
//       console.log(result);
//      }
//       catch{
//           console.log("error has occured ");
          
//       }
//    }
//   getResult();




  
// 13. Use async/await to fetch data from a simple API and log the response to the console

// function getCatFacts(){
// const URL = "https://cat-fact.herokuapp.com/facts";  
//  const response = fetch(URL)
//  console.log(response);
// }
// async function getFacts() {
//     const fact =  await getCatFacts();
// }
// getFacts();
// if(key == checkKey){
    //     console.log(key);
        
    // }


// const obj = {
//     name:"sibasish",
//     age:20,
//     isStudent:true
// }
//  const checkKey = "age";

//  for ( const key in obj){
    

//     if(!isNaN(obj[key]) && obj[key] >= 0 && obj[key] < 100){
//         console.log(key);
        
//     }
//  }