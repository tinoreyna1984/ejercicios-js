/**
 * En un único bucle for, obtener:
 * - Valores máximo y mínimo de un array de decimales.
 * - El promedio de todos esos valores.
 */


let array = [1.25, 2.6, 0.75, 0.025, 8.02], results = [], sum = 0;

for(let i = 0; i < array.length; i++){
    if(array[i] === Math.max(...array))  results.push(array[i]);
    if(array[i] === Math.min(...array)) results.push(array[i]);
    sum += array[i];
    if( i === array.length - 1) results.push(sum/array.length);
}

console.log(results);
