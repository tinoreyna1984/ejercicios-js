/**
 * Multiplicar dos números de forma recursiva
 */
function multRecursiva(a, b) {
  if (a === 0 || b === 0) return 0;
  if(a > 0) b += multRecursiva(a - 1, b);
  return b;  
}

console.log(multRecursiva(2, 3)); // 6
console.log(multRecursiva(4, 3)); // 12
console.log(multRecursiva(12, 3)); // 36
