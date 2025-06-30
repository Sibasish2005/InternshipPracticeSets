// 7. Write a function to check if a string is a palindrome.
let str = "abba";
let str2="sibasish";
function checkpllindrom(str){
let reverseStr = "";
for(let i=str.length-1;i>=0;i--){
    reverseStr += str[i];
}
if( str===reverseStr){
    console.log(str +" is a pallindrome. ");
}
else{
    console.log(str+ " is not a pallindrome.");
    
}
}
checkpllindrom(str);
checkpllindrom(str2);
