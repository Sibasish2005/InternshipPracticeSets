// 8. Write a JavaScript function to convert a string to title case (e.g., "hello world" to "Hello World").
let str = "this is a long string statement";
function toTitleCase() {
  let words = str.split(" ");
  let char;
  let arr = [];
  for (i = 0; i < words.length; i++) {
    char = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    arr.push(char);
  }
  arr = arr.join();
  let newStr = arr.toString();
  newStr = newStr.replaceAll(",", " ");
  console.log(newStr);
}
toTitleCase();
