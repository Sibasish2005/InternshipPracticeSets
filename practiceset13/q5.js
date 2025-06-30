// 5. Write a JavaScript function to check if a given number is a power of two.
//  power of 2 means :A number that can be written as 2 raised to an integer power .
function checkPowerOfTwo(n) {
  if (n % 2 == 0) {
    console.log(n + " is power of 2 .");
    return n;
  } else {
    console.log(n + " is not a power of two");
  }
}
checkPowerOfTwo(10);
