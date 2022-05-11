// potencia

const power = (b, e) => {
  let pow = b;
  for(let i = 0; i < e - 1; i++){
    pow *= b;
  }
  return pow;
}

console.log(power(2,3));
console.log(power(4,3));
console.log(power(3,4));
