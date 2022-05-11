// factorial

const factorial = (n) => {
  if(n <= 1) return 1;
  let f = 1;
  for(let k = 1; k <= n; k++){
    f*=k;
  }
  return f;
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));

