// 7. Write a JavaScript function that displays a message after 3 seconds, then displays another message after 2 seconds, and finally displays a third message after 1 second.

function delayedDisplay() {
  let count = 1;
  let n = 3000;
  while (count <= 3) {
    setTimeout(() => {
      console.log("hello world");
    }, n);
    n -= 1000;
    count++;
  }
}
delayedDisplay();
