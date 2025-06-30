// 8. Write a function to display a countdown from 10 to 1, with each number displayed after a 1-second delay.

function countdown() {
  for (let i = 10; i > 0; i--) {
    setTimeout(() => {
      console.log(i);
    }, (10 - i + 1) * 1000);
  }
}

countdown();
