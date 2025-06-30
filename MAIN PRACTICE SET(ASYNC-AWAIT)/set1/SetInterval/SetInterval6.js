// 6. How does setInterval work with a loop?
setInterval(() => {
  for (let i = 1; i < 5; i++) {
    console.log("count", i);
  }
}, 1000);
