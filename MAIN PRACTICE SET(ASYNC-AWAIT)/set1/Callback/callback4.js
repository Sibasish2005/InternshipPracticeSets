// 4. How does a callback function handle errors in a nested callback?
function firstCallback(arg, callback) {
  setTimeout(() => {
    callback(arg);
  }, 1000);
}
function getData(args) {
    
}
