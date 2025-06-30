1. Write a function to reverse a given string.

let str="sibasish";
function reverseStr(){
    let reversed = "";
    for(let i=str.length-1;i>=0;i--){
        reversed=reversed+str[i];
    }
    console.log("my string:",str);
    console.log("reversed string:",reversed);
 }
 reverseStr();

 2. Write a function to convert a string to uppercase

let str="sibasish";
 const toUpcase = ()=>{
console.log(str);
let upper= str.toUpperCase();
console.log(upper);

 }
 toUpcase();

3. Write a function to convert a string to lowercase.
let str="SIBASISH";
 const toLowcase = ()=>{
console.log(str);
let lower= str.toLowerCase();
console.log(lower);
 }
 toLowcase();

let str="sibasish";
function containSubStr(substring){
    if(str.includes(substring)){
        console.log(str," contains ",substring);

    }
    else{
        console.log("string do not contain anything");

    }
}
containSubStr("siba");

5. Write a function to replace all occurrences of a substring with a new string

let str="sibasish chakraborti";
console.log(str);

let replaced = str.replace("sibasish","another");
console.log("replaced string is",replaced);

6. Write a function to extract the first word from a string.

let str="this is a string"
function extractFirst(){
   let newStr= str.split(" ")[0]
;
    console.log(newStr);

}
extractFirst();

7. Write a function to extract the last word from a string.
let string="this is a string"
function extractFirst(){
   let newStr= string.split(" ")[3]
;
    console.log(newStr);

}
extractFirst();

8. Write a function to remove all whitespace from a string.
 let str= "      sibasish    "
const rmvWhitespace = ()=>{
    let newStr=str.trim();
    console.log(newStr);

}
rmvWhitespace();

9. Write a function to count the number of vowels in a string.

let str="Sibasish"
let vowels="a e i o u A E I O U"
let count=0;
const countVowel=(char)=>{
    for(let char of str){
        if(vowels.includes(char)){
            count++;

        }

    }
    console.log("found",count,"vowels");
}
countVowel();

10. Write a function to check if a string is a palindrome.

let str = "tenet";
let reversedStr = "tenet";

const checkPalindrome = () => {
  if (str === reversedStr) {
    console.log("it's a palindrome");
  } else {
    console.log("not palindrome");
  }
};
checkPalindrome();

10. Write a function to check if a string is a palindrome.
let str="madam";
let char=str.split("");
let reversedStr =char.reverse();
console.log(reversedStr);
 if (char===reversedStr){
    console.log("its a palindrom");
 }

// 1. Write a function to reverse an array

let arr=[1,2,3,4,5,6];
for(let i=arr.length-1;i>=0;i--){
    reversedArr=arr[i];
    console.log(reversedArr);
}

2. Write a function to flatten a nested array

let array=[1,2,3,[4,5,6],7,8,[9,10,11],12,[13,14,15]];
let newArray =[];

const flatArray=(array)=>{
    for(let i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            flatArray(array[i]);
        }
        else{
            newArray.push(array[i]);
        }
    }
}
flatArray(array);
console.log(newArray);

3. Write a function to remove duplicates from an array

let arr = [1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 6];
function removeDuplicate(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}
console.log(removeDuplicate(arr));

4. Write a function to find the index of a specific element in an array.

let arr = [1, 2, 3, 4, 5, 6, 7];
function findIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      console.log("position is ", i + 1);
      console.log("index is :");
      return i;
    }
  }
  console.log("element is not in array");
  return -1;
}
console.log(findIndex(arr, 3));

5. Write a function to extract all even numbers from an array.

let arr=[1,2,3,4,5];

const evenArray=(arr)=>{
    for(let i=0;i<arr.length;i++){
        while(arr[i]%2===0){
            console.log(arr[i]);
          i++;
        }
    }
};
evenArray(arr);

6. Write a function to extract all odd numbers from an array.
let arr=[1,2,3,4,5];

const evenArray=(arr)=>{
    for(let i=0;i<arr.length;i++){
        while(arr[i]%2==!0){
            console.log(arr[i]);
          i++;
        }
    }
};
evenArray(arr);

7. Write a function to find the maximum value in an array.
let arr = [1, 2, 3, 4, 9, 5, 8];
function findMaxValue() {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMaxValue());





8. Write a function to find the minimum number of operations to transform one array into another.

let arr = [7, 8, 3, 4, 9, 5, 18];
function findMinValue() {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findMinValue());





9. Write a function to sum all numbers in an array

let arr =[1,2,3,4,5,6];
let arrSum=0;
const sumAll=()=>{
    for(let i=0;i<arr.length;i++){
        arrSum= arrSum+arr[i];
    }    
    console.log(arrSum);
    
}
console.log(sumAll());




10. Write a function to find the average of all numbers in an array

let arr =[1,2,3,4,5,6];

const avgArr=()=>{
    let arrSum=0;
    for(let i=0;i<arr.length;i++){
        arrSum= arrSum+arr[i];
    }    
   arrAvg=arrSum/arr.length;
   return arrAvg;
    
}
console.log(avgArr());



