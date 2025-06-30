// // 2. Write a function to extract all substrings between two specified strings.
// let str=" this is a string statement"
 
// function extractMid(){
//     let parts= str.trim().split(" ");
//     console.log(parts);
//     let result=[];
//     for(let i=1;i<parts.length-1;i++){
//         result=parts[i];
//         console.log(result)
//     }
// }
// extractMid();



// //3. Write a function to find the longest palindromic substring in a string.

// function longestPlinSubStr(str) {
//     if (str.length < 1) {
//         return "String is empty";
//     }

//     let start = 0;
//     let maxLength = 0;

//     function expandAroundCenter(left, right) {
//         while (left >= 0 && right < str.length && str[left] === str[right]) {
//             left--;
//             right++;
//         }
//         return right - left - 1;
//     }

//     for (let i = 0; i < str.length; i++) {
//         let len1 = expandAroundCenter(i, i);
//         let len2 = expandAroundCenter(i, i + 1);

//         let len = len1;
//         if (len2 > len1) {
//             len = len2;
//         }

//         if (len > maxLength) {
//             maxLength = len;
//             let intHalfLen = (len - 1) / 2 | 0;
//             start = i - intHalfLen;
//         }
//     }

//     return str.substring(start, start + maxLength);
// }

// console.log("Longest palindromic substrings is :");
// console.log(longestPlinSubStr("bbabbbcccaab"));


// ARRAY


// 1. Write a function to find the maximum sum of a subarray within an array.
















  