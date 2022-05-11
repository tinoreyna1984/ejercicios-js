/**
 * Algoritmos de ordenamiento de arrays
 */

// inserción (JavaScript tiene en built-in el método sort, que emplea este algoritmo)
let array1 = [12, 54, 154, 98, 2, 10.45, 1, 3, 5];
console.log(array1.sort((a, b) => a - b)); // orden ascendente
console.log(array1.sort((a, b) => b - a)); // orden descendente
// el parámetro se asume opcional si se comparan valores según formato Unicode, en vez de
// apelar a la naturaleza corriente de los mismos (números, letras, etcétera)

/**
 * Inserción:
 * - Dos frentes de recorrido: recorrer el array desde el segundo elemento
 * y recorrer internamente de forma descendente desde el valor final del primer frente
 * - Comparar dos valores. Si el segundo valor es mayor al primero, entonces
 * cambiar el orden
 */

const newSort = (arr) => {
  // Primer frente de recorrido
  for (let i = 1; i < arr.length; i++) {
    // Segundo frente
    for (let j = i - 1; j > -1; j--) {
      // comparación por orden ascendente e intercambio
      if (arr[j + 1] < arr[j]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }

  return arr;
};
let array2 = [12, 54, 154, 98, 2, 10.45, 1, 3, 5];
console.log(newSort(array2));

/**
 * Burbuja (bubble sort):
 * - Dos frentes de recorrido: recorrer el array desde el primer elemento
 * y recorrer el array desde el primer elemento hasta la posición del primer frente
 * - Comparar dos valores. Si el segundo valor es mayor al primero, entonces
 * cambiar el orden
 */

function bubbleSort(arr) {
  // Primer frente de recorrido
  for (let i = 0; i < arr.length; i++) {
    // Segundo frente
    for (let j = 0; j < arr.length - i - 1; j++) {
      // comparación por orden ascendente e intercambio
      if (arr[j + 1] < arr[j]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }
  return arr;
}

let array3 = [12, 54, 154, 98, 2, 10.45, 1, 3, 5];
console.log(bubbleSort(array3));

/**
 * Selección:
 * - Se basa en las posiciones de recorrido del array
 * - Dos frentes del recorrido: una desde el primer elemento y otra
 * desde el elemento siguiente
 * - Se establece una asignación de valores mínimos como pivote de comparación
 * en cada frente
 */

function selectionSort(arr) {
  let min;

  // Primer frente del recorrido
  for (let i = 0; i < arr.length; i++) {
    // asumir que el valor actual es el mínimo del array
    // a través de la posición
    min = i;
    // Segundo frente del recorrido
    for (let j = i + 1; j < arr.length; j++) {
      // si el array en la posición actual de este frente es menor al del
      // elemento considerado mínimo, esta posición es para el nuevo mínimo
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // comparar índices: si el nuevo mínimo es diferente al primero, intercambiar
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

let array4 = [12, 54, 154, 98, 2, 10.45, 1, 3, 5];
console.log(selectionSort(array4));


