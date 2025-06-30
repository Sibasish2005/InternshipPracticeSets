// 4. How does setTimeout handle multiple timeouts with different delays?
console.log("Start");

setTimeout(() => {
  console.log("After 2s");
}, 2000);

setTimeout(() => {
  console.log("After 1s");
}, 1000);

setTimeout(() => {
  console.log("After 3s");
}, 3000);

console.log("End");