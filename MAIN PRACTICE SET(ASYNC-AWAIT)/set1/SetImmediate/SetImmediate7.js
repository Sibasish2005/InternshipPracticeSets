// 7. Can you write an example of using setImmediate with a callback function?
function firstCallback(arg, callback) {
  setI(() => {
    callback(arg);
  }, 1000);
}
function secondCallback(arg) {
  console.log("the arguement is :", arg);
}
firstCallback(1,secondCallback);