// 6. Write a JavaScript function that generates a random number between 1 and 100 and keeps generating numbers until it finds a number that is divisible by 7.

function guessNo() {
  n = Math.floor(Math.random() * 100);
  if (n % 7 !== 0) {
    guessNo();
    console.log("number does not match");
    
  }
  if (n % 7 === 0) {
    return n;
  }
}
console.log(guessNo());

