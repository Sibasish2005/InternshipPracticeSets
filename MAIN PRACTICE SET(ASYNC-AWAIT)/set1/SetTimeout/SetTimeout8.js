// 8. How does setTimeout handle errors in a timeout?
setTimeout(() => {
  let num=10;
  try {
    console.log(num);
  } catch {
    console.log("error");
  }
}, 1000);
