// 3.  Write a JavaScript function to check if a given number is prime or not.
let num = 12;
function isPrime(num) {
  if (num <= 1) {
    console.log("Number is not prime");
    return;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      console.log("num is not a prime no");
      return;
    } else {
      console.log(" num is a prime no");
    }
  }
}
isPrime(num);
