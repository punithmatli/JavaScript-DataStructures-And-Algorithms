function fibonacciIterative(n) {
  let a = 0, b = 1, temp = 0;
  for (let i = 2; i < n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
}

fibonacciIterative(7);

function fibonacciRecursive(n) {
  if(n < 2) return n;
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciRecursive(8))