/**
 * Pseudo-quicksort llamado tinoSort
 */

 const tinoSort = (arr) => {
    let t0, t1; // para calcular tiempo de ejecución
  
    // Funciones auxiliares:
    // - Promedio como pivote.
    // - Sort rápido para particiones del array de entrada.
    const avg = (arr) => {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) sum += arr[i];
      return sum / arr.length;
    };
    const numberSort = (arr) => {
      return arr.sort((a, b) => a - b);
    };
  
    // Algoritmo:
    // 1. Calculo el promedio de elementos
    // 2. Comparo cada elemento contra el promedio. Si es mayor al promedio,
    // colocar elemento en el arreglo izquierdo. Caso contrario, en el derecho
    // 3. Ordeno las particiones.
    // 4. Junto las particiones. El nuevo array generado es lo que retorna.
    t0 = performance.now();
    let prom = avg(arr);
    let leftArr = [],
      rightArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < prom) leftArr.push(arr[i]);
      if (arr[i] >= prom) rightArr.push(arr[i]);
    }
    numberSort(leftArr);
    numberSort(rightArr);
    t1 = performance.now();
    console.log(`Tiempo de ejecución de [${arr}]: ${(t1 - t0).toFixed(3)}`);
    return leftArr.concat(rightArr);
  };
  
  console.log(tinoSort([5, 3, 4, 1, 2])); // [ 1, 2, 3, 4, 5 ] - Tiempo de ejecución de [5,3,4,1,2]: 0.077
  console.log(tinoSort([12, 54, 154, 98, 2, 10.45, 1, 3, 5])); // [1,2,3,5,10.45,12,54,98,154] - Tiempo de ejecución de [12,54,154,98,2,10.45,1,3,5]: 0.215
  