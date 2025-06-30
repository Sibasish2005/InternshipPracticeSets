// 6. How does setTimeout work with a loop?
setTimeout(() => {
  for (let i = 1; i <= 5; i++) {
    console.log("counting:", i);
  }
}, 1000);
