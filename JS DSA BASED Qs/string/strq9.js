// 9. Write a function to find the longest substring without repeating characters.
let str = "cdeabcdeabcde";

function findLongestUniqueSubstring(str) {
  let storeUniqueChar = "";
  let longestSubstring = "";

  for (let i = 0; i < str.length; i++) {
    if (!storeUniqueChar.includes(str[i])) {
      storeUniqueChar = storeUniqueChar + str[i];
    } else {
      if (storeUniqueChar.length > longestSubstring.length) {
        longestSubstring = storeUniqueChar;
      }
      storeUniqueChar = storeUniqueChar.slice(storeUniqueChar.indexOf(str[i]) + 1) + str[i];
    }
  }

  if (storeUniqueChar.length > longestSubstring.length) {
    longestSubstring = storeUniqueChar;
  }

  return longestSubstring;
}
console.log("the longest substring without repeating characters is:");

console.log(findLongestUniqueSubstring(str));
