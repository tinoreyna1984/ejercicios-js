// numeros perfectos
const numberIsPerfect = (n) => {
  let sum = 0;
  for(let i=1; i <= n/2; i++){
    if(n%i === 0) sum += i; // itera la suma de divisores
  }
  return (n === sum ? true : false) ;
}

console.log(numberIsPerfect(6)); // true
console.log(numberIsPerfect(10)); // false
console.log(numberIsPerfect(12)); // false
console.log(numberIsPerfect(15)); // false
console.log(numberIsPerfect(28)); // true
console.log(numberIsPerfect(496)); // true
console.log(numberIsPerfect(8128)); // true
