// 8. How does setImmediate handle errors in an immediate?
setImmediate(() => {
  let num = 1;
  try {
    console.log(num);
  } catch (error) {
    console.log("error");
  }
});
