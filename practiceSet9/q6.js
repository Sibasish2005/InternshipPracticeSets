// 6.  How would you reverse a string without using built-in methods like reverse()?
let str = "sibasish";
let reverseStr = "";
for(let i=str.length-1;i>=0;i--){
    reverseStr += str[i];

}
console.log(reverseStr);
