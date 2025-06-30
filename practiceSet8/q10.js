// 10. Write a JavaScript function to generate the Fibonacci series up to a given number.
let fib = [0, 1];
function fibonacci(n) {
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
   console.log(fib[i]);
   
  }
}
fibonacci(7);

