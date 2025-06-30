// 8. How does setInterval handle errors in an interval?
setInterval(() => {
  let num = 10;
  try {
    console.log(num);
  } catch (error) {
    console.log("error");
  }
}, 1000);
