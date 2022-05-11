// multiplicar sin multiplicar

const multiply = (a, b) => {
  if (a === 0 || b === 0)
    return 0;
  let numb = 0;
  for(let i = 0; i < a; i++){
    numb += b;
  }
  return numb;
}

console.log(multiply(2,3)); // 6
console.log(multiply(4,8)); // 32
console.log(multiply(5,9)); // 45
