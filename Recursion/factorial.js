function findFactorialRecursive(number) {
  debugger;
  if(number === 1) return 1;
  return number * findFactorialRecursive(number-1);
}

function findFactorialIterative(number) {
  let answer = 1;
  for(let i = number; i > 0; i--) {
    answer = answer * i;
  }
  return answer;
}

findFactorialIterative(5)
console.log(findFactorialRecursive(6))