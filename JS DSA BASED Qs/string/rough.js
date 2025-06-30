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
        storeUniqueChar =
          storeUniqueChar.slice(storeUniqueChar.indexOf(str[i]) + 1) + str[i];
      }
    }
    if (storeUniqueChar.length > longestSubstring.length) {
      longestSubstring = storeUniqueChar;
    }
  
    return longestSubstring;
  }
  
  console.log(findLongestUniqueSubstring("abcdeabcdeabcde"));
  console.log(findLongestUniqueSubstring("abcaaaaaaaadefg"));
  