// 5. Can you explain the concept of a callback queue?
console.log("first");
setTimeout(() => {
    console.log("this is call back queue");
    
}, 1000);
console.log("last");

