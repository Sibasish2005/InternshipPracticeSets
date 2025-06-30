// 10. Write a function to convert a string to camelCase.

function toCamelCase(str) {
  let parts = str.trim().split(" ");
  let camelCase = parts[0].toLowerCase();
  for (let i = 1; i < parts.length; i++) {
    let firstChar = parts[i].charAt(0).toUpperCase();
    let restChar = parts[i].slice(1).toLowerCase();
    camelCase = camelCase + firstChar + restChar;
  }
  return camelCase;
}
console.log("input:this is a string");
console.log("output:");
console.log(toCamelCase("this is a string"));
