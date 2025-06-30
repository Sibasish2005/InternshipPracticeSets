// 6. Write a function to find the shortest substring that contains all characters of a given string.

function findShortestSubstring(str) {
  let storeUniqueChar = "";

  for (i = 0; i < str.length; i++) {
    if (!storeUniqueChar.includes(str[i])) {
      storeUniqueChar = storeUniqueChar + str[i];
    }
  }
  return storeUniqueChar;
}
console.log(findShortestSubstring("abcdeabcdeabcde"));
console.log(findShortestSubstring("abcaaaaaaaadefg"));
