// 1. Why are callbacks used in JavaScript
function sayHello(callback) {
  callback();
}
function sayHi() {
  console.log("hi");
}
sayHello(sayHi)