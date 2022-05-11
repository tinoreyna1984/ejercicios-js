// numeros primos
const numberIsPrime = (n) => {
  let p = true, i = 2;
  while(p && i <= n/2){
    if(n%i === 0) p = false;
    i++;
  }
  return p;
}

console.log(numberIsPrime(1));
console.log(numberIsPrime(3));
console.log(numberIsPrime(4));
console.log(numberIsPrime(8));
console.log(numberIsPrime(11));
console.log(numberIsPrime(121));
console.log(numberIsPrime(131));
