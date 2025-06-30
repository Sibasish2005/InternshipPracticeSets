// 7. Can you write an example of using setInterval with a callback function?
function firstCallback(arg, callback) {
  setInterval(() => {
    callback(arg);
  }, 1000);
}
function secondCallback(arg) {
  console.log("the arguement is :", arg);
}
firstCallback(1,secondCallback);