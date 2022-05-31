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

/**
 * Merge sort
 */
//merging two arrays appropriately.
function merge(arr1, arr2) {
  //make a new array and have two value pointers
  let res = [],
    i = 0,
    j = 0;

  //sorting the first array.
  if (arr1.length > 1) {
    let min = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (i !== min) {
        if (arr1[i] < arr1[min]) {
          //also swap the elements
          [arr1[i], arr1[min]] = [arr1[min], arr1[i]];
          //change the minimum
          min = i;
        }
      }
    }
  }

  //sorting the second array.
  if (arr2.length > 1) {
    let min = 0;
    for (let i = 0; i < arr2.length; i++) {
      if (i !== min) {
        if (arr2[i] < arr2[min]) {
          //also swap the elements
          [arr2[i], arr2[min]] = [arr2[min], arr2[i]];
          //change the minimum
          min = i;
        }
      }
    }
  }

  //Value comparison.
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  //pushing the rest of arr1.
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  //pushing the rest of arr2.
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  return res;
}

//merge sort
function mergeSort(arr) {
  //Best case
  if (arr.length <= 1) return arr;

  //splitting into halves
  let mid = Math.ceil(arr.length / 2);

  let arr1 = arr.slice(0, mid);

  let arr2 = arr.slice(mid);

  let arr1_subarrays = [],
    sorted_arr1_subarrays = [];

  let arr2_subarrays = [],
    sorted_arr2_subarrays = [];

  //loop through array 1 making subarrays of two elements
  for (let i = 0; i < arr1.length; i += 2) {
    arr1_subarrays.push(arr1.slice(i, i + 2));
  }

  //loop through array 2 making subarrays of two elements.
  for (let i = 0; i < arr2.length; i += 2) {
    arr2_subarrays.push(arr2.slice(i, i + 2));
  }

  // sorting each subarray of arr1.
  for (let i = 0; i < arr1_subarrays.length; i += 2) {
    let result = merge(arr1_subarrays[i], arr1_subarrays[i + 1]);
    result.forEach((value) => sorted_arr1_subarrays.push(value));
  }

  // sorting each subarray of arr2.
  for (let i = 0; i < arr2_subarrays.length; i += 2) {
    let result = merge(arr2_subarrays[i], arr2_subarrays[i + 1]);
    result.forEach((value) => sorted_arr2_subarrays.push(value));
  }

  let result = merge(sorted_arr1_subarrays, sorted_arr2_subarrays);

  return result;
}

console.log(mergeSort([70, 50, 30, 10, 20, 40, 60]));

/**
 * Quick sort
 */
function partition(items, left, right) {
  //rem that left and right are pointers.

  let pivot = items[Math.floor((right + left) / 2)],
    i = left, //left pointer
    j = right; //right pointer

  while (i <= j) {
    //increment left pointer if the value is less than the pivot
    while (items[i] < pivot) {
      i++;
    }

    //decrement right pointer if the value is more than the pivot
    while (items[j] > pivot) {
      j--;
    }

    //else we swap.
    if (i <= j) {
      [items[i], items[j]] = [items[j], items[i]];
      i++;
      j--;
    }
  }

  //return the left pointer
  return i;
}

function quickSort(items, left, right) {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right); //get the left pointer returned

    if (left < index - 1) {
      //more elements on the left side
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      //more elements on the right side
      quickSort(items, index, right);
    }
  }

  return items; //return the sorted array
}

let items = [5, 3, 7, 6, 2, 9];

console.log(quickSort(items, 0, items.length - 1));
