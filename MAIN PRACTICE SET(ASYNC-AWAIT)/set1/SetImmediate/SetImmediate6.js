// 6. How does setImmediate work with a loop?
setImmediate(() => {
  for (let i = 1; i < 5; i++) {
    console.log("count", i);
  }
}, 1000);
