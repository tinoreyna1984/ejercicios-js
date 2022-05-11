// dividir sin dividir
const divide = (a,b) => {
  if(a === 0 || a < b) return 0;
  if(b === 0) return undefined;
  let quot = 0;
  while(a >= b){
    a -= b;
    quot++;
  }
  return quot;
}

console.log(divide(6,3));
console.log(divide(8,2));
console.log(divide(9,3));

