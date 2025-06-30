// 2. Write a function to extract all substrings between two specified strings.

let str = "this is a string statement";
let newStr = [];

function extractMidSubstrings() {
  let parts = str.trim().split(" ");
  console.log(parts);

  for (let i = 1; i < parts.length-1; i++) {
    newStr = parts[i];
    console.log(newStr);
  }
  
}
extractMidSubstrings();
