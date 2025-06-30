// 10. How do you pass a function as a callback?
function main(arg, callback) {
  callback(arg);
}
function function2(arg) {
  console.log(arg);
}
main(2,function2)