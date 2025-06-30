console.log("1");
console.log("2");
console.log("3");
setImmediate(() => {
  console.log("5");
});
console.log("4");
